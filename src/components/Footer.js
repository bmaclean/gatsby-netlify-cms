import React from 'react';
import {Link} from 'gatsby';

import facebook from '../img/social/facebook.svg';
import twitter from '../img/social/twitter.svg';

const footerLinkStyles = {
	color: '#FF6600',
	textDecoration: 'underline',
	'&.visited': {
		color: '#FF6600'
	}
};

const Footer = () => {
	return (
		<footer
			css={{backgroundColor: '#000066', color: 'white', padding: '2% 5% 2% 5%'}}
		>
			©2013-2016 BeMo Academic Consulting Inc. All rights reserved.{' '}
			<span css={{cursor: 'pointer', ...footerLinkStyles}}>
				Disclaimer & Privacy Policy
			</span>{' '}
			<Link to="/contact" css={{...footerLinkStyles}}>
				Contact Us
			</Link>
		</footer>
	);
};

export default Footer;
