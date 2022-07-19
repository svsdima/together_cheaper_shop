import React, { useState } from 'react';

const Quantity = ({ countInStock }) => {
	const [qty, setQty] = useState(1);

	const plusQty = () => {
		if (qty < countInStock) {
			return setQty(qty + 1);
		} else if (qty === countInStock) {
			return setQty(qty);
		}
	};
	const minusQty = () => {
		if (qty === 1) {
			return setQty(1);
		}
		if (qty <= countInStock) {
			return setQty(qty - 1);
		}
	};
	if (countInStock > 0) {
		return (
			<div className='product__quantity'>
				<button className='product__quantity__btn' onClick={() => minusQty()}>
					<i class='fa-solid fa-angle-left'></i>
				</button>
				<span>{qty}</span>
				<button className='product__quantity__btn' onClick={() => plusQty()}>
					<i class='fa-solid fa-angle-right'></i>
				</button>
			</div>
		);
	} else {
		return (
			<div className='product__quantity'>
				<span>Нет в наличии</span>
			</div>
		);
	}
};

export default Quantity;
