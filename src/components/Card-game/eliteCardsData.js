const dataElite = {
	eliteCard: [
		{
			id: 'e0',
			title: 'Ninja King',
			description: [
				'The King can move as a Queen.',
				'space',
				'- Can Capture pieces.',
				"- Can't move to a Check square.",
				"- Can't do Check directly.",
				'- Use: Move and Discar.',
			],
		},
		{
			id: 'e1',
			title: 'King Teleport',
			description: [
				'The King can be placed in any empty square of the board.',
				'space',
				'- Use: Move and Discar.',
			],
		},
		{
			id: 'e2',
			title: `"You can't!"`,
			description: [
				'When your oponent moves, you say "You can`t!". And should place the piece in it original place, and do other movement in this turn.',
				'space',
				'- The Oponent can do this move in the next turn.',
				'- The Oponent can move this piece, but to other position.',
				"- Use: immediately after Oponent's move and Discar.",
			],
		},
	],
};
export default dataElite;
