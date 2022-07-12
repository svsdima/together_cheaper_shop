import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/logo.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<Navbar />
				<div className='header__wrapper'>
					<div className='header__logo logo'>
						<Link to='/'>
							<img src={logo} alt='logo' />
						</Link>
						<h3>вместе дешеле.org</h3>
					</div>
					<div className='header__phone'>
						<a href='tel:+79688905556'>
							<i class='fa-solid fa-phone'></i>
							<p>+7 (968) 890 55 56</p>
						</a>
					</div>
					<h1 className='header__title'>интернет-магазин с Бесплатной доставкой</h1>
					<div className='header__nav'>
						<Link to='/login' className='header__nav__item'>
							<i class='fa-solid fa-user'></i>
							<p>Войти</p>
						</Link>
						<Link to='/favorite' className='header__nav__item'>
							<i class='fa-solid fa-heart'></i>
							<p>0 шт</p>
						</Link>
						<Link to='/cart' className='header__nav__item'>
							<i class='fa-solid fa-basket-shopping'></i>
							<p>1024 &#8381;</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
