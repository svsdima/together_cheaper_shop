import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='container'>
				<ul className='navbar__links'>
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
