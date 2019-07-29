import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';
import PasswordPage from '../components/PasswordPage';

export const IndexPageTemplate = ({image, title, heading, intro}) => (
	<div>
		<div
			css={{
				backgroundImage: `url(${
					image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundPosition: 'top left',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '800px',
				width: '100%'
			}}
		>
			<div
				css={{
					display: 'flex',
					height: '100%',
					lineHeight: '1',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column'
				}}
			>
				<h1
					css={{
						textAlign: 'center',
						letterSpacing: '10px',
						fontFamily: 'arial',
						fontWeight: 'lighter',
						fontSize: '48px',
						color: 'white',
						borderBottom: '1px solid white',
						width: '50%',
						paddingBottom: '10px'
					}}
				>
					{title}
				</h1>
			</div>
		</div>
		<div css={{margin: '16px', marginTop: '48px'}}>
			<h1>{heading}</h1>
		</div>
		{console.log({intro})}
		{intro.blurbs.map(blurb => (
			<div
				key={blurb.title}
				css={{marginTop: '2em', paddingLeft: '3.5%', paddingRight: '3.5%'}}
			>
				<h3>{blurb.title}</h3>
				{blurb.text.split(/\n/).map(paragraph => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		))}
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({data}) => {
	const {frontmatter} = data && data.markdownRemark;
	const [show, setShow] = useState(false);

	const passwordSuccess = () => {
		setShow(true);
	};

	return show ? (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	) : (
		<PasswordPage onSuccess={passwordSuccess} />
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				intro {
					blurbs {
						title
						text
					}
				}
			}
		}
	}
`;
