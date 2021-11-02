import React, { useRef, useState } from 'react';

import { randomMinMax, randomHexadecimal } from '../../../functions/functions';

import './playerBoard.css';
import '../cardGame-buttons.css';
import './playerBoard.css';

import dataNormal from '../normalCardsData';
import dataSpecial from '../specialCardsData';
import dataElite from '../eliteCardsData';

import CardNormal from './Cards/CardNormal/CardNormal';
import CardSpecial from './Cards/CardSpecial/CardSpecial';
import CardElite from './Cards/CardElite/CardElite';
import CardEmpty from './Cards/CardEmpty/CardEmpty';

const PlayerBoard = ({ player }) => {
	const normalCard = dataNormal.normalCard;
	const specialCard = dataSpecial.specialCard;
	const eliteCard = dataElite.eliteCard;

	const [playerCards, setPlayerCards] = useState([null, null, null, null]);
	const cardsSlots = useRef([false, false, false, false]);

	// Generate de New Card to be added.
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

	// Set a new card for the Player.
	const playerNewCard = (cardType) => {
		let flag = false;
		let index = 0;
		const auxCards = [...playerCards];

		while (index <= 3 && !flag) {
			if (!cardsSlots.current[index]) {
				flag = true;
				cardsSlots.current[index] = true;

				auxCards[index] = newCard(cardType);
			}
			index++;
		}
		setPlayerCards(auxCards);
	};

	// Player Discard Function.
	const discardPlayerCard = (id) => {
		const auxPlayerCards = [...playerCards];

		const index = auxPlayerCards?.indexOf(
			auxPlayerCards?.find((p) => p?.id === id)
		);

		auxPlayerCards.splice(index, 1, null);
		cardsSlots.current[index] = false;
		setPlayerCards(auxPlayerCards);
	};

	// Determinate the distribution of divs, depending if Right or Left player.
	const leftOrRight = (player) => {
		if (player === 'left') {
			const row = 'row';
			return row;
		} else if (player === 'right') {
			const rowReverse = 'row-reverse';
			return rowReverse;
		}
	};
	// Fixes de border of this box, depending if Right or Left player.
	const btnPickUpBorderFix = (player) => {
		if (player === 'left') {
			const left = '0vw 1vw 1vw 0vw';
			return left;
		} else if (player === 'right') {
			const right = '1vw 0vw 0vw 1vw';
			return right;
		}
	};
	const cardsBoardBorderFix = (player) => {
		if (player === 'left') {
			const left = '1vw 0vw 0vw 1vw';
			return left;
		} else if (player === 'right') {
			const right = '0vw 1vw 1vw 0vw';
			return right;
		}
	};
	return (
		<div className='player-board' style={{ flexDirection: leftOrRight(player) }}>
			<div
				className='cards-board'
				style={{ borderRadius: cardsBoardBorderFix(player) }}
			>
				{playerCards.map((card) => {
					if (card?.cardType === 'normal') {
						return (
							<CardNormal {...card} discardButton={() => discardPlayerCard(card.id)} />
						);
					} else if (card?.cardType === 'special') {
						return (
							<CardSpecial {...card} discardButton={() => discardPlayerCard(card.id)} />
						);
					} else if (card?.cardType === 'elite') {
						return <CardElite {...card} discardButton={() => discardPlayerCard(card.id)} />;
					} else if (card === null) {
						return <CardEmpty key={randomHexadecimal()} />;
					}
				})}
			</div>

			<div className='side-bar'>
				<div
					className='btn-pick-up'
					style={{ borderRadius: btnPickUpBorderFix(player) }}
				>
					<button className='btn btn-normal' onClick={() => playerNewCard('normal')}>
						Normal Card
					</button>
					<button className='btn btn-special' onClick={() => playerNewCard('special')}>
						Special Card
					</button>
					<button className='btn btn-elite' onClick={() => playerNewCard('elite')}>
						Elite Card
					</button>
				</div>
			</div>
		</div>
	);
};

export default PlayerBoard;
