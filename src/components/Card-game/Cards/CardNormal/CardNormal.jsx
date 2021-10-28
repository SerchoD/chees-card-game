import React from 'react';
import './cardNormal.css';

const CardNormal = ({
	title = 'Card Title',
	description = 'Card Description.',
	discardButton,
	id,
}) => {
	// Make description move to start position when Mouse Leaves.
	const unScrollDescription = (event) => {
		event.target.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='card-normal'>
			<div className='title-container'>
				<h1 className='title'>{title}</h1>
			</div>

			<div className='description-container' onMouseLeave={unScrollDescription}>
				{description.map((textLine, i) => {
					if (i === 0) {
						return (
							<p style={{ textIndent: '1vw' }} key={i} className='description-text'>
								{textLine}
							</p>
						);
					} else if (textLine === 'space') {
						return <div key={i} className='card-divisor'></div>;
					} else {
						return (
							<p key={i} className='description-text'>
								{textLine}
							</p>
						);
					}
				})}
			</div>

			<div className='btn-container'>
				<button
					className='btn-delete'
					onClick={() => {
						discardButton(id);
					}}
				>
					Discard
				</button>
			</div>
		</div>
	);
};

export default CardNormal;
