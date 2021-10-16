import React from 'react';
import data from './cards';
import './cardGame.css';
import Card from './Card';

const CardGame = () => {
	const card = data.card;

	return (
		<div className='main-board'>
			<div className='left-player-board player-board'></div>

			<div className='center-board'>
				<span className='center-lane'></span>
			</div>

			<div className='rigth-player-board player-board'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default CardGame;
