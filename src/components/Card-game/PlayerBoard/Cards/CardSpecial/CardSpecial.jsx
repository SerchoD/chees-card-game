import React from 'react';
import './cardSpecial.css';

const CardSpecial = ({
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

	const onDelete = () => {
		discardButton(id);
	};

	return (
		<div className='card-special'>
			<div className='title-container-special'>
				<h1 className='title-special'>{title}</h1>
			</div>

			<div
				className='description-container-special'
				onMouseLeave={unScrollDescription}
			>
				{description.map((lane, i) => {
					if (i === 0) {
						return (
							<p style={{ textIndent: '1vw' }} key={i} className='description-text-special'>
								{lane}
							</p>
						);
					} else if (lane === 'space') {
						return <div key={i} className='card-divisor-special'></div>;
					} else {
						return (
							<p key={i} className='description-text-special'>
								{lane}
							</p>
						);
					}
				})}
			</div>

			<div className='btn-container-special'>
				<button className='btn-delete-special' onClick={onDelete}>
					Discard
				</button>
			</div>
		</div>
	);
};

export default CardSpecial;
