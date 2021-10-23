import React from 'react';
import data from './cards';
import './cardGame.css';
import CardNormal from './Cards/CardNormal/CardNormal';
import CardSpecial from './Cards/CardSpecial/CardSpecial';
import CardElite from './Cards/CardElite/CardElite';

const CardGame = () => {
	const card = data.card;

	return (
		<div className='main-board'>
			<div className='left-player-board player-board'></div>

			<div className='center-board'>
				<span className='center-lane'></span>
			</div>

			<div className='rigth-player-board player-board'>
				<CardNormal title={card[1].title} description={card[1].description} />
				<CardElite title={card[1].title} description={card[1].description} />
				<CardSpecial title={card[1].title} description={card[1].description} />
				<CardSpecial title={card[1].title} description={card[1].description} />
			</div>
		</div>
	);
};

export default CardGame;
