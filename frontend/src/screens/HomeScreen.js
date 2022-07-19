import React from 'react';
import Product from '../components/Product.js/index.js';
import products from '../products.js';

const HomeScreen = () => {
	return (
		<main className='main container'>
			<h2 className='title'>Хиты продаж</h2>
			<div className='products__list'>
				{products.slice(0, 6).map((product) => (
					<Product product={product} />
				))}
			</div>
		</main>
	);
};

export default HomeScreen;
