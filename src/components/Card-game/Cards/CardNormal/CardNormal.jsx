import React from 'react';
import './cardNormal.css';

const CardNormal = ({
	title = 'Card Title',
	description = 'Esto aca; -Esto otro aca. -Esto así.',
}) => {
	// Make description move to start position when Mouse Leaves.
	const unScrollDescription = (event) => {
		console.log('mouseLeave');

		event.target.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// ---- ------ -- - SOLUCIONAR EL SCROLL  -- - -- -- -- ---  - -
	return (
		<div className='card-normal'>
			<div className='title-container'>
				<h1 className='title'>{title}</h1>
			</div>

			<div className='description-container' onMouseLeave={unScrollDescription}>
				{description.map((lane, i) => {
					if (i === 0) {
						return (
							<p style={{ textIndent: '1vw' }} key={i} className='description-text'>
								{lane}
							</p>
						);
					} else if (lane === 'space') {
						return <div className='card-divisor'></div>;
					} else {
						return (
							<p key={i} className='description-text'>
								{lane}
							</p>
						);
					}
				})}
			</div>

			<div className='btn-container'>
				<button className='btn-delete'>Discard</button>
			</div>
		</div>
	);
};

export default CardNormal;
