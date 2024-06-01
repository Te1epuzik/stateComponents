import classes from './filter.module.scss';
import { useState } from 'react';

export const Filter = ({ filters, onClick, images }) => {

	const parsedImages = [];
	const [selectedFilter, setSelectorFilter] = useState(0);

	const handleFilterSelect = event => {
		if (!event.target.closest('button') || event.target.className.includes('filter-button--selected')) {
			return;
		}

		parsedImages.splice(0, parsedImages.length);
		const currentId = +event.target.getAttribute('id');

		if (currentId === 0) {
			images.forEach((image, index) => {
				parsedImages.push({ ...image, key: index });
			});
		} else {
			images
				.filter(image => image.category === filters
					.find(filter => filter.id === currentId).filterName)
				.forEach((image, index) => {
					parsedImages.push({ ...image, key: index });
				});
		}

		onClick(parsedImages);
		setSelectorFilter(currentId);
	}

	return (
		<div className={classes['filter']} onClick={handleFilterSelect}>
			{filters.map(filter =>
				<button
					key={filter.id}
					className={selectedFilter === filter.id ?
						classes['filter-button'] + ' ' + classes['filter-button--selected'] :
						classes['filter-button']}
					type='button'
					id={filter.id}>

					{filter.filterName}

				</button>
			)}
		</div>
	)
}
