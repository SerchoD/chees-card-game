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
	const backEnable = useRef(true);
	const [playerPoints, setPlayerPoints] = useState([0]);

	// Generate de New Card wich will be added.
	const generateNewCard = (cardType) => {
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

	// Create a new card for the Player.
	const getPlayerNewCard = (cardType) => {
		const cardPrice = [3, 6, 9];
		if (
			(cardType === 'normal' &&
				playerPoints[playerPoints.length - 1] >= cardPrice[0]) ||
			(cardType === 'special' &&
				playerPoints[playerPoints.length - 1] >= cardPrice[1]) ||
			(cardType === 'elite' &&
				playerPoints[playerPoints.length - 1] >= cardPrice[2])
		) {
			let flag = false;
			let index = 0;
			const auxCards = [...playerCards];

			while (index <= 3 && !flag) {
				if (!cardsSlots.current[index]) {
					flag = true;
					cardsSlots.current[index] = true;

					auxCards[index] = generateNewCard(cardType);
				}
				index++;
			}
			if (flag === true) {
				if (cardType === 'normal') {
					setPlayerPoints([
						...playerPoints,
						playerPoints[playerPoints.length - 1] - cardPrice[0],
					]);
				}
				if (cardType === 'special') {
					setPlayerPoints([
						...playerPoints,
						playerPoints[playerPoints.length - 1] - cardPrice[1],
					]);
				}
				if (cardType === 'elite') {
					setPlayerPoints([
						...playerPoints,
						playerPoints[playerPoints.length - 1] - cardPrice[2],
					]);
				}
			}
			backEnable.current = false;

			setPlayerCards(auxCards);
		}
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
	const btnPickUpStyleFix = (player) => {
		if (player === 'left') {
			const left = '0vw 1vw 0vw 0vw';
			return left;
		} else if (player === 'right') {
			const right = '1vw 0vw 0vw 0vw';
			return right;
		}
	};
	const cardsBoardStyleFix = (player) => {
		if (player === 'left') {
			const left = '1vw 0vw 0vw 1vw';
			return left;
		} else if (player === 'right') {
			const right = '0vw 1vw 1vw 0vw';
			return right;
		}
	};

	const pointsCounterStyleFix = (player) => {
		if (player === 'left') {
			return {
				borderLeft: '1px solid rgba(192, 192, 192, 0.212)',
				borderRadius: '1vw 0vw 1vw 0vw',
			};
		} else if (player === 'right') {
			return {
				borderRight: ' 1px solid rgba(192, 192, 192, 0.212)',
				borderRadius: '0vw 1vw 0vw 1vw',
			};
		}
	};

	const addPoints = (points) => {
		backEnable.current = true;
		setPlayerPoints([
			...playerPoints,
			playerPoints[playerPoints.length - 1] + points,
		]);
	};
	// One step back, to last point.
	const goBack = () => {
		if (
			playerPoints[playerPoints.length - 1] !== 0 &&
			backEnable.current === true
		) {
			const auxArr = [...playerPoints];
			const newArr = auxArr.slice(0, -1);
			setPlayerPoints(newArr);
		}
	};

	return (
		<div
			className='player-board'
			style={{ flexDirection: leftOrRight(player) }}
		>
			<div
				className='cards-board'
				style={{ borderRadius: cardsBoardStyleFix(player) }}
			>
				{playerCards.map((card) => {
					if (card?.cardType === 'normal') {
						return (
							<CardNormal
								{...card}
								discardButton={() => discardPlayerCard(card.id)}
							/>
						);
					} else if (card?.cardType === 'special') {
						return (
							<CardSpecial
								{...card}
								discardButton={() => discardPlayerCard(card.id)}
							/>
						);
					} else if (card?.cardType === 'elite') {
						return (
							<CardElite
								{...card}
								discardButton={() => discardPlayerCard(card.id)}
							/>
						);
					} else if (card === null) {
						return <CardEmpty key={randomHexadecimal()} />;
					} else {
						return null;
					}
				})}
			</div>

			<div className='side-bar'>
				<div
					className='btn-pick-up'
					style={{ borderRadius: btnPickUpStyleFix(player) }}
				>
					<button
						className='btn btn-normal'
						onClick={() => getPlayerNewCard('normal')}
					>
						<p className='btn-text'>Normal Card</p>
						<p className='btn-text'>
							<span style={{ color: 'whitesmoke' }}>3</span> points
						</p>
					</button>
					<button
						className='btn btn-special'
						onClick={() => getPlayerNewCard('special')}
					>
						<p className='btn-text'>Special Card</p>
						<span style={{ color: 'whitesmoke' }}>6</span> points
					</button>
					<button
						className='btn btn-elite'
						onClick={() => getPlayerNewCard('elite')}
					>
						<p className='btn-text'>Elite Card</p>
						<span style={{ color: 'whitesmoke' }}>9</span> points
					</button>
				</div>
				<div
					className='points-counter'
					style={pointsCounterStyleFix(player)}
				>
					<div className='capture-pieces'>
						<h1 className='capture-pieces-title'>Captured</h1>
						<button
							className='btn-piece'
							onClick={() => {
								addPoints(1);
							}}
						>
							Pawn
						</button>
						<button
							className='btn-piece'
							onClick={() => {
								addPoints(3);
							}}
						>
							Bishop
						</button>
						<button
							className='btn-piece'
							onClick={() => {
								addPoints(3);
							}}
						>
							Knight
						</button>
						<button
							className='btn-piece'
							onClick={() => {
								addPoints(5);
							}}
						>
							Rook
						</button>
						<button
							className='btn-piece'
							onClick={() => {
								addPoints(9);
							}}
						>
							Queen
						</button>
						<button
							className='btn-back'
							onClick={() => {
								goBack();
							}}
						>
							Back
						</button>
						<div className='points-container'>
							<h1 className='points-title'>Points</h1>
							<h2 className='player-points'>
								{playerPoints[playerPoints.length - 1]}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerBoard;
