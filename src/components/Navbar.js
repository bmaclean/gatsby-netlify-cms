import React from 'react';
import {Link} from 'gatsby';
import logo from '../img/bemo-logo.png';

const Navbar = props => {
	return (
		<nav role="navigation" aria-label="main-navigation">
			<div>
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
					display: 'flex'
				}}
			>
				<div>
					<Link to="/">Main</Link>
				</div>
				<div>
					<Link to="/">How To Prepare</Link>
				</div>
				<div>
					<Link to="/">CDA Interview Questions</Link>
				</div>
				<div>
					<Link to="/contact">Contact</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
