import React from 'react';
import {Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';
import './layout.css';

const Layout = ({children}) => {
	const {title, description} = useSiteMetadata();
	return (
		<div
			css={{
				width: '100vw',
				fontFamily: 'arial'
			}}
		>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />

				<meta name="robots" content="noindex" />
			</Helmet>
			<Navbar />
			<div css={{marginTop: '100px'}}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
