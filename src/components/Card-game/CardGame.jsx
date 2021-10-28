import React, { useState, useRef } from 'react';
import dataNormal from './normalCardsData';
import dataSpecial from './specialCardsData';
import dataElite from './eliteCardsData';
import randomMinMax from '.././../functions/functions';
import './cardGame.css';
import './cardGame-buttons.css';
import CardNormal from './Cards/CardNormal/CardNormal';
import CardSpecial from './Cards/CardSpecial/CardSpecial';
import CardElite from './Cards/CardElite/CardElite';
import CardEmpty from './Cards/CardEmpty/CardEmpty';

const CardGame = () => {
	const normalCard = dataNormal.normalCard;
	const specialCard = dataSpecial.specialCard;
	const eliteCard = dataElite.eliteCard;

	const emptySlot = () => <CardEmpty key={Math.random()} />;

	const [rigthPlayer, setRigthPlayer] = useState([
		emptySlot(),
		emptySlot(),
		emptySlot(),
		emptySlot(),
	]);
	const rigthSlots = useRef([false, false, false, false]);

	const rigthPlayerNormalCard = (cardType) => {
		const CardId = `CardId: ${randomMinMax(100000000, 1000000000)}`;
		const randomKey = `Key: ${randomMinMax(100000000, 1000000000)}`;
		const newCard = () => {
			if (cardType === 'normal') {
				const max = normalCard.length - 1;
				const i = randomMinMax(0, max);

				return (
					<CardNormal
						key={randomKey}
						id={CardId}
						title={normalCard[i].title}
						description={normalCard[i].description}
						discardButton={discard}
					/>
				);
			}
		};

		for (let i = 0; i <= 3; i++) {
			const auxCards = [...rigthPlayer];

			if (rigthSlots.current[i] === false) {
				rigthSlots.current[i] = true;

				auxCards[i] = newCard();

				setRigthPlayer(auxCards);

				break;
			}
		}
	};

	const discard = (id) => {
		console.log(id);
		console.log(rigthPlayer[0].key, ' ID en [0] Dentro de Discard');
	};

	return (
		<div className='main-board'>
			{/* <div className='left-player-board player-board'>{leftPlayer}</div> */}

			<div className='center-board'>
				{/* <div className='btn-options left-player-options'>
					<button
						className='btn btn-normal'
						onClick={() => leftPlayerNormalCard('normal')}
					>
						Normal Card
					</button>
					<button
						className='btn btn-special'
						onClick={() => leftPlayerNormalCard('special')}
					>
						Special Card
					</button>
					<button className='btn btn-elite' onClick={() => leftPlayerNormalCard('elite')}>
						Elite Card
					</button>
				</div> */}

				<span className='center-lane'></span>

				<div className='btn-options rigth-player-options'>
					<button
						className='btn btn-normal'
						onClick={() => rigthPlayerNormalCard('normal')}
					>
						{' '}
						Normal Card
					</button>
					<button
						className='btn btn-special'
						onClick={() => rigthPlayerNormalCard('special')}
					>
						Special Card
					</button>
					<button
						className='btn btn-elite'
						onClick={() => rigthPlayerNormalCard('elite')}
					>
						{' '}
						Elite Card
					</button>
				</div>
			</div>

			<div className='rigth-player-board player-board'>{rigthPlayer}</div>
		</div>
	);
};

export default CardGame;
