import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorList from './ColorList';
import ProductPrice from './ProductPrice';
import Quantity from './Quantity';

const Product = ({ product }) => {
	const { _id, name, images, colors, price, countInStock, discount } = product;
	return (
		<div className='product'>
			<Link to={`/product/${_id}`} key={_id}>
				<div className='product__card'>
					<div className='product__image'>
						<img src={images[0]} alt={name} />
					</div>
				</div>
			</Link>
			<h3 className='product__name'>{name}</h3>
			<ColorList colors={colors} />
			<ProductPrice price={price} discount={discount} />
			<div className='product__bottom'>
				<Quantity countInStock={countInStock} />
				<button className='btn'>В корзину</button>{' '}
			</div>
		</div>
	);
};

export default Product;
