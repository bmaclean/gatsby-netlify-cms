import React from 'react';
import {Link} from 'gatsby';
import logo from '../img/bemo-logo.png';

const navItemStyles = {
	display: 'flex',
	alignItems: 'center',
	height: '100%',
	padding: '27px'
};

const linkStyles = {
	fontFamily: 'arial',
	textDecoration: 'none',
	color: 'black',
	fontSize: '17px',
	letterSpacing: '1px',
	'&:hover': {
		borderBottom: '1px solid black'
	},
	'&:after': {
		borderBottom: '1px solid black',
		width: '40%'
	}
};

const fakeLinkStyles = {
	cursor: 'pointer'
};

const activeLinkStyles = {
	borderBottom: '1px solid black'
};

const Navbar = () => {
	return (
		<nav
			role="navigation"
			aria-label="main-navigation"
			css={{
				background: 'white',
				display: 'flex',
				flexDireciton: 'row',
				height: '100px',
				left: 0,
				position: 'fixed',
				top: 0,
				width: '100vw',
				zIndex: 5
			}}
		>
			<div css={{marginLeft: '3%'}}>
				<Link to="/" title="Logo">
					<img
						src={logo}
						alt="BeMo Academic Consulting"
						css={{
							height: '100px',
							width: '167px'
						}}
					/>
				</Link>
			</div>
			<div
				css={{
					display: 'flex',
					background: 'white',
					flexDireciton: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
					width: '100%',
					height: '100%',
					paddingRight: '3%'
				}}
			>
				<div css={{...navItemStyles}}>
					<Link
						to="/"
						css={{...linkStyles}}
						activeStyle={{...activeLinkStyles}}
					>
						Main
					</Link>
				</div>
				{/* <div css={{...navItemStyles}}>
					<span css={{...linkStyles, ...fakeLinkStyles}}>How To Prepare</span>
				</div>
				<div css={{...navItemStyles}}>
					<span css={{...linkStyles, ...fakeLinkStyles}}>
						CDA Interview Questions
					</span>
				</div> */}
				<div css={{...navItemStyles}}>
					<Link
						to="/contact"
						css={{...linkStyles}}
						activeStyle={{...activeLinkStyles}}
					>
						Contact Us
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
