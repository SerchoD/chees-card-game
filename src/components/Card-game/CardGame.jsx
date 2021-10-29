import React, { useState, useRef, useEffect } from 'react';
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
import { v4 } from 'uuid';
const CardGame = () => {
	const normalCard = dataNormal.normalCard;
	const specialCard = dataSpecial.specialCard;
	const eliteCard = dataElite.eliteCard;
	const [auxRightPlayer, setAuxRightPlayer] = useState([]);

	const emptySlot = () => <CardEmpty key={Math.random()} />;

	const [rigthPlayer, setRigthPlayer] = useState([
		null,
		null,
		null,
		null,
	]);
	const rigthSlots = useRef([false, false, false, false]);

	const newCard = (cardType) => {
		const CardId = `CardId: ${randomMinMax(100000000, 1000000000)}`;
		const randomKey = `Key: ${randomMinMax(100000000, 1000000000)}`;
		if (cardType === 'normal') {
			const max = normalCard.length - 1;
			const i = randomMinMax(0, max);

			return (
				{
					title: normalCard[i].title,
					description: normalCard[i].description,
					discardButton: () => console.log(rigthPlayer),
					id: CardId,
					key: randomKey
				}
				// <CardNormal
				// 	key={randomKey}
				// 	id={CardId}
				// 	title={normalCard[i].title}
				// 	description={normalCard[i].description}
				// 	discardButton={discard}
				// />
			);
		}
	};
	const rigthPlayerNormalCard = (cardType) => {
		let flag = false;
		let i = 0;
		const auxCards = [...rigthPlayer];
		while(i <= 3 && !flag){
			
			if (!rigthSlots.current[i]) {
				flag = true;
				rigthSlots.current[i] = true;
				
				auxCards[i] = newCard(cardType);
				
			}
			i++;
		}
		setRigthPlayer(auxCards);
		// for (let i = 0; i <= 3; i++) {
		// 	const auxCards = [...rigthPlayer];

		// 	if (rigthSlots.current[i] === false || !flag) {
		// 		rigthSlots.current[i] = true;

		// 		auxCards[i] = newCard();

		// 		setRigthPlayer(auxCards);

		// 		break;
		// 	}
		// }
	};

	// useEffect(() => {
	// 	console.log('useEffect', rigthPlayer);

	// }, [rigthPlayer])

	const discard = (id) => {
		const auxRightPlayer = [...rigthPlayer];
		console.log(id, rigthPlayer)
		const index = auxRightPlayer?.indexOf(auxRightPlayer?.find( p => p?.id === id))
		console.log('index', index);
		auxRightPlayer.splice(index, 1, null);
		rigthSlots.current[index] = false;
		setRigthPlayer(auxRightPlayer);
		// console.log('id', id);
		// console.log(rigthPlayer[0].key, ' key en [0] Dentro de Discard');
		// console.log('rigthPlayer', rigthPlayer);
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
						Elite Card
					</button>
				</div>
			</div>

			<div className='rigth-player-board player-board'>{rigthPlayer.map( r => {
				return r ? <CardNormal {...r}/> : <CardEmpty key={v4()} />
				// return r ? <CardNormal {...r} discardButton={() => discard(r.id)}/> : <CardEmpty key={v4()} />
			})}</div>
		</div>
	);
};

export default CardGame;
