import React from 'react';

const ColorList = ({ colors }) => {
	console.log(colors);
	return (
		<div className='colors__list'>
			{colors.map((color) => (
				<div className='color' style={{ backgroundColor: color }} key={color}></div>
			))}
		</div>
	);
};

export default ColorList;
