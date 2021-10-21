import React from 'react';
import './cardNormal.css';

const CardNormal = ({
	title = 'Titulo',
	description = 'Este es el lugar donde debería estar la descripción si la hubiera, pero como no la hay, en su lugar hay un texto de prueba que representa una potencial descripción de extensa longitud. Este es el lugar donde debería estar la descripción si la hubiera, pero como no la hay, en su lugar hay un texto de prueba que representa una potencial descripción de extensa longitud',
}) => {
	const scrollUpCustom = (event) => {
		event.target.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='card'>
			<div className='title-container'>
				<h1 className='title'>{title}</h1>
			</div>

			<p className='description' onMouseLeave={scrollUpCustom}>
				{description}
			</p>

			<div className='btn-container'>
				<button className='btn-delete'>Discard</button>
			</div>
		</div>
	);
};

export default CardNormal;
