// Return a random number between two num parametters, Min and Max.
export const randomMinMax = (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

// Returns a random Hexadecimal value, it length depends of one numeric parametter.
// Default length = 12.
export const randomHexadecimal = (length = 16) => {
	const character = '11223344556677889900abcdefghijklmnopqrstuvwxyz';
	const result = [];

	for (let i = 0; i < length; i++) {
		result.push(character[randomMinMax(0, 45)]);
	}

	return result.join('');
};
