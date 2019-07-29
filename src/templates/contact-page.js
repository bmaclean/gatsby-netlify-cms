import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';

const inputStyles = {
	marginTop: '7px',
	marginBottom: '32px',
	width: '85%',
	backgroundColor: '#CCCCCC',
	padding: '9px'
};

const btnStyles = {
	color: '#000066',
	backgroundColor: '#999999',
	padding: '7px 28px 7px 28px',
	marginRight: '10px'
};

export const ContactPageTemplate = ({image}) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const resetAll = () => {
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
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
			></div>
			<div
				css={{
					fontSize: '0.9em',
					paddingLeft: '3.5%',
					paddingRight: '3.5%',
					letterSpacing: '2px'
				}}
			>
				<div>
					<h3>BeMo Academic Consulting Inc. </h3>
					<p>
						<b>Toll Free:</b> 1-855-900-BeMo (2366)
					</p>
					<p>
						<b>Email:</b> info@bemoacademicconsulting.com
					</p>
				</div>
				<div
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '100%'
					}}
				>
					<label>
						NAME: <sup>*</sup>
					</label>
					<input
						css={{...inputStyles}}
						value={name}
						onChange={e => setName(e.target.value)}
						type="text"
					></input>
					<label>
						EMAIL ADDRESS: <sup>*</sup>
					</label>
					<input
						css={{...inputStyles}}
						value={email}
						onChange={e => setEmail(e.target.value)}
						type="email"
					></input>
					<label>
						HOW CAN WE HELP YOU: <sup>*</sup>
					</label>
					<textarea
						rows="8"
						css={{...inputStyles}}
						value={message}
						onChange={e => setMessage(e.target.value)}
					></textarea>
				</div>
				<div
					css={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row'
					}}
				>
					<button css={{...btnStyles}} onClick={resetAll}>
						RESET
					</button>
					<button css={{...btnStyles}}>SUBMIT</button>
				</div>
				<div
					css={{
						marginTop: '64px',
						marginBottom: '64px',
						letterSpacing: '0px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<b>Note: </b> If you are having difficulties with our contact us form
					above, send us an email to info@bemoacademicconsulting.com (copy &
					paste the email address)
				</div>
			</div>
		</div>
	);
};

ContactPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const ContactPage = ({data}) => {
	const {frontmatter} = data && data?.markdownRemark;

	return (
		<Layout>
			<ContactPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

ContactPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
	query ContactPage($id: String!) {
		markdownRemark(id: {eq: $id}) {
			html
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
