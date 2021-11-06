import React, { useState } from 'react';

import './cardGame.css';
import './cardGame-buttons.css';

import { randomMinMax } from '../../functions/functions';

import PlayerBoard from './PlayerBoard/PlayerBoard';

const CardGame = () => {
	const [colorTheme, setColorTheme] = useState([
		randomMinMax(50, 255),
		randomMinMax(50, 255),
		randomMinMax(50, 255),
	]);
	const theme = {
		background: `radial-gradient(rgba(${colorTheme[0]}, ${colorTheme[1]}, ${colorTheme[2]}, 1) 0%, black)`,
	};

	// Generate a New 'Color Theme', every time.
	const randomColor = () => {
		const aux0 = randomMinMax(50, 255);
		const aux1 = randomMinMax(50, 255);
		const aux2 = randomMinMax(50, 255);
		const auxColors = [aux0, aux1, aux2];
		setColorTheme(auxColors);
	};

	return (
		<div className='main-board' style={theme}>
			<PlayerBoard player='left' />
			<button
				className='set-theme'
				style={theme}
				onClick={randomColor}
			></button>
			<PlayerBoard player='right' />
		</div>
	);
};

export default CardGame;
