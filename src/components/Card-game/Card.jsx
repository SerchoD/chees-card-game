import React from 'react';
import './card.css';

const Card = ({
	title = 'Titulo',
	description = 'Este es el lugar donde debería estar la descripción si la hubiera, pero como no la hay, en su lugar hay un texto de prueba que representa una potencial descripción de extensa longitud.',
}) => {
	return (
		<div className='card'>
			<h1 className='title'>{title}</h1>
			<span className='lane1'></span>
			<p className='description'>{description}</p>
		</div>
	);
};

export default Card;
