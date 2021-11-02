import React, { useState, useRef } from 'react';
import dataNormal from './normalCardsData';
import dataSpecial from './specialCardsData';
import dataElite from './eliteCardsData';
import { randomMinMax, randomHexadecimal } from '.././../functions/functions';
import './cardGame.css';
import './cardGame-buttons.css';
import CardNormal from './PlayerBoard/Cards/CardNormal/CardNormal';
import CardSpecial from './PlayerBoard/Cards/CardSpecial/CardSpecial';
import CardElite from './PlayerBoard/Cards/CardElite/CardElite';
import CardEmpty from './PlayerBoard/Cards/CardEmpty/CardEmpty';
import PlayerBoard from './PlayerBoard/PlayerBoard';

const CardGame = () => {
	const normalCard = dataNormal.normalCard;
	const specialCard = dataSpecial.specialCard;
	const eliteCard = dataElite.eliteCard;

	const [rigthPlayer, setRigthPlayer] = useState([null, null, null, null]);
	const rigthSlots = useRef([false, false, false, false]);

	const [leftPlayer, setLeftPlayer] = useState([null, null, null, null]);
	const leftSlots = useRef([false, false, false, false]);

	//  Generate de New Card to be added.
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

	// Set a new card for de Rigth Player.
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

	// Set a new card for de Left Player.
	const LeftPlayerNewCard = (cardType) => {
		let flag = false;
		let index = 0;
		const auxCards = [...leftPlayer];

		while (index <= 3 && !flag) {
			if (!leftSlots.current[index]) {
				flag = true;
				leftSlots.current[index] = true;

				auxCards[index] = newCard(cardType);
			}
			index++;
		}
		setLeftPlayer(auxCards);
	};

	// Rigth Player Discard Function.
	const discardRigthPlayer = (id) => {
		const auxRightPlayer = [...rigthPlayer];

		const index = auxRightPlayer?.indexOf(
			auxRightPlayer?.find((p) => p?.id === id)
		);

		auxRightPlayer.splice(index, 1, null);
		rigthSlots.current[index] = false;
		setRigthPlayer(auxRightPlayer);
	};

	// Left Player Discard Function.
	const discardLeftPlayer = (id) => {
		const auxLeftPlayer = [...leftPlayer];

		const index = auxLeftPlayer?.indexOf(auxLeftPlayer?.find((p) => p?.id === id));

		auxLeftPlayer.splice(index, 1, null);
		leftSlots.current[index] = false;
		setLeftPlayer(auxLeftPlayer);
	};

	return (
		<div className='main-board'>
			<PlayerBoard player='left' />
			<PlayerBoard player='right' />
			{/* <div className='left-player-board player-board'>
				{leftPlayer.map((card) => {
					if (card?.cardType === 'normal') {
						return (
							<CardNormal {...card} discardButton={() => discardLeftPlayer(card.id)} />
						);
					} else if (card?.cardType === 'special') {
						return (
							<CardSpecial {...card} discardButton={() => discardLeftPlayer(card.id)} />
						);
					} else if (card?.cardType === 'elite') {
						return <CardElite {...card} discardButton={() => discardLeftPlayer(card.id)} />;
					} else if (card === null) {
						return <CardEmpty key={randomHexadecimal()} />;
					}
				})}
			</div>

			<div className='center-board'>
				<div className='btn-options left-player-options'>
					<button className='btn btn-normal' onClick={() => LeftPlayerNewCard('normal')}>
						Normal Card
					</button>
					<button
						className='btn btn-special'
						onClick={() => LeftPlayerNewCard('special')}
					>
						Special Card
					</button>
					<button className='btn btn-elite' onClick={() => LeftPlayerNewCard('elite')}>
						Elite Card
					</button>
				</div>

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
						return (
							<CardNormal {...card} discardButton={() => discardRigthPlayer(card.id)} />
						);
					} else if (card?.cardType === 'special') {
						return (
							<CardSpecial {...card} discardButton={() => discardRigthPlayer(card.id)} />
						);
					} else if (card?.cardType === 'elite') {
						return (
							<CardElite {...card} discardButton={() => discardRigthPlayer(card.id)} />
						);
					} else if (card === null) {
						return <CardEmpty key={randomHexadecimal()} />;
					}
				})}
			</div> */}
		</div>
	);
};

export default CardGame;
