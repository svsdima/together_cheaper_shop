import React from 'react';
import { Link } from 'react-router-dom';
import logo_white from '../assets/logo_white.svg';
import { linksFooter } from '../utils/constants';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<div className='footer__logo'>
						<Link to='/'>
							<img src={logo_white} alt='logo__white' />
						</Link>
					</div>
					<ul className='footer__nav'>
						{linksFooter.map((link) => {
							const { id, text, url } = link;
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}
					</ul>
					<div className='footer__other'>
						<div className='footer__politic'>
							<Link to='/'>Пользовательское соглашение</Link>
							<Link to='/'>Политика конфиденцииальности</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
