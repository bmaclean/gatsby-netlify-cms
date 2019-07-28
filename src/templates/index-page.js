import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({
	image,
	title,
	mainpitch,
	description,
	intro
}) => (
	<div>
		<div
			style={{
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
				style={{
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
						fontSize: '42px',
						color: 'white',
						borderBottom: '1px solid white',
						width: '40%',
						paddingBottom: '10px'
					}}
				>
					{title}
				</h1>
			</div>
		</div>
		<div>
			<h1>{mainpitch.title}</h1>
			<div>
				<h3>{mainpitch.description}</h3>
			</div>
		</div>
		<div>
			<div>
				<p>{description}</p>
			</div>
		</div>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array
	})
};

const IndexPage = ({data}) => {
	const {frontmatter} = data && data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
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
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						text
					}
					description
				}
			}
		}
	}
`;
