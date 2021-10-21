import React, { useEffect } from 'react';
import './cardElite.css';

const CardElite = ({
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
		<div className='cardElite'>
			<h1 className='titleElite'>{title}</h1>

			<p
				className='descriptionElite'
				onMouseLeave={scrollUpCustom}
				title={description}
			>
				{description}
			</p>

			<div className='button-containerElite'>
				<button className='btn-deleteElite'>Discard</button>
			</div>
		</div>
	);
};

export default CardElite;
