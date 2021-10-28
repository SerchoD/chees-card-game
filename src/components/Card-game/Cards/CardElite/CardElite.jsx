import React from 'react';
import './cardElite.css';

const CardElite = ({
	title = 'Card Title',
	description = 'Card Description.',
}) => {
	// Make description move to start position when Mouse Leaves.
	const unScrollDescription = (event) => {
		event.target.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='card-elite'>
			<div className='title-container-elite'>
				<h1 className='title-elite'>{title}</h1>
			</div>

			<div className='description-container-elite' onMouseLeave={unScrollDescription}>
				{description.map((lane, i) => {
					if (i === 0) {
						return (
							<p style={{ textIndent: '1vw' }} key={i} className='description-text-elite'>
								{lane}
							</p>
						);
					} else if (lane === 'space') {
						return <div key={i} className='card-divisor-elite'></div>;
					} else {
						return (
							<p key={i} className='description-text-elite'>
								{lane}
							</p>
						);
					}
				})}
			</div>

			<div className='btn-container-elite'>
				<button className='btn-delete-elite'>Discard</button>
			</div>
		</div>
	);
};

export default CardElite;
