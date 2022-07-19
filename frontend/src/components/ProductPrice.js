import React from 'react';

const ProductPrice = ({ discount, price }) => {
	if (discount) {
		return (
			<div className='product__prices'>
				<span className='product__price old'>{price} &#8381;</span>
				<span className='product__price stock'>{(price / 100) * 90} &#8381;</span>
			</div>
		);
	} else {
		return (
			<div className='product__prices'>
				<span className='product__price'>{price} &#8381;</span>
			</div>
		);
	}
};

export default ProductPrice;
