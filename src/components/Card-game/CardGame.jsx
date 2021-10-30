import React, { useState, useRef, useEffect } from 'react';
import dataNormal from './normalCardsData';
import dataSpecial from './specialCardsData';
import dataElite from './eliteCardsData';
import { randomMinMax, randomHexadecimal } from '.././../functions/functions';
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

	const [rigthPlayer, setRigthPlayer] = useState([null, null, null, null]);
	const rigthSlots = useRef([false, false, false, false]);

	const newCard = (cardType) => {
		if (cardType === 'normal') {
			const max = normalCard.length - 1;
			const index = randomMinMax(0, max);

			return {
				title: normalCard[index].title,
				description: normalCard[index].description,
				id: `Id: ${randomHexadecimal()}`,
				key: `Key: ${randomHexadecimal()}`,
				cardType: cardType,
			};
		} else if (cardType === 'special') {
			const max = normalCard.length - 1;
			const index = randomMinMax(0, max);

			return {
				title: specialCard[index].title,
				description: specialCard[index].description,
				id: `Id: ${randomHexadecimal()}`,
				key: `Key: ${randomHexadecimal()}`,
				cardType: cardType,
			};
		} else if (cardType === 'elite') {
			const max = normalCard.length - 1;
			const index = randomMinMax(0, max);

			return {
				title: eliteCard[index].title,
				description: eliteCard[index].description,
				id: `Id: ${randomHexadecimal()}`,
				key: `Key: ${randomHexadecimal()}`,
				cardType: cardType,
			};
		}
	};

	const rigthPlayerNewCard = (cardType) => {
		let flag = false;
		let index = 0;
		const auxCards = [...rigthPlayer];

		while (index <= 3 && !flag) {
			if (!rigthSlots.current[index]) {
				flag = true;
				rigthSlots.current[index] = true;

				auxCards[index] = newCard(cardType);
			}
			index++;
		}
		setRigthPlayer(auxCards);
	};

	const discard = (id) => {
		const auxRightPlayer = [...rigthPlayer];

		const index = auxRightPlayer?.indexOf(
			auxRightPlayer?.find((p) => p?.id === id)
		);

		auxRightPlayer.splice(index, 1, null);
		rigthSlots.current[index] = false;
		setRigthPlayer(auxRightPlayer);
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
					<button className='btn btn-normal' onClick={() => rigthPlayerNewCard('normal')}>
						Normal Card
					</button>
					<button
						className='btn btn-special'
						onClick={() => rigthPlayerNewCard('special')}
					>
						Special Card
					</button>
					<button className='btn btn-elite' onClick={() => rigthPlayerNewCard('elite')}>
						Elite Card
					</button>
				</div>
			</div>

			<div className='rigth-player-board player-board'>
				{rigthPlayer.map((card) => {
					if (card?.cardType === 'normal') {
						return <CardNormal {...card} discardButton={() => discard(card.id)} />;
					} else if (card?.cardType === 'special') {
						return <CardSpecial {...card} discardButton={() => discard(card.id)} />;
					} else if (card?.cardType === 'elite') {
						return <CardElite {...card} discardButton={() => discard(card.id)} />;
					} else if (card === null) {
						return <CardEmpty key={randomHexadecimal()} />;
					}
				})}
			</div>
		</div>
	);
};

export default CardGame;
