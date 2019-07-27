import React from 'react';
import {Helmet} from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';

const Layout = ({children}) => {
	const {title, description} = useSiteMetadata();
	return (
		<div>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
			</Helmet>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
