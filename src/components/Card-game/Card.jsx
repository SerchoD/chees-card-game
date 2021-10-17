import React from 'react';
import './card.css';

const Card = ({
	title = 'Titulo',
	description = 'Este es el lugar donde debería estar la descripción si la hubiera, pero como no la hay, en su lugar hay un texto de prueba que representa una potencial descripción de extensa longitud. Este es el lugar donde debería estar la descripción si la hubiera, pero como no la hay, en su lugar hay un texto de prueba que representa una potencial descripción de extensa longitud',
	cardClass = ['normal', 'special', 'elit'],
}) => {
	return (
		<div className='card'>
			<h1 className='title'>{title}</h1>

			<p className='description' title={description}>
				{description}
			</p>

			<div className='button'>
				<button className='btn-delete'>Descartar</button>
			</div>
		</div>
	);
};

export default Card;
