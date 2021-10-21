import React from 'react';
import './cardSpecial.css';

const CardSpecial = ({
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
		<div className='cardSpecial'>
			<h1 className='titleSpecial'>{title}</h1>

			<p
				className='descriptionSpecial'
				onMouseLeave={scrollUpCustom}
				title={description}
			>
				{description}
			</p>

			<div className='button-containerSpecial'>
				<button className='btn-deleteSpecial'>Discard</button>
			</div>
		</div>
	);
};

export default CardSpecial;
