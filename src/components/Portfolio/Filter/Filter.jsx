import classes from './filter.module.scss';
import { useState } from 'react';

export const Filter = ({ filters, onClick, images }) => {

	const parsedImages = [];
	const [selectedFilter, setSelectorFilter] = useState(0);

	const handleFilterSelect = currentId => {
		parsedImages.splice(0, parsedImages.length);

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
		<div className={classes['filter']}>
			{filters.map(filter =>
				<button
					onClick={() => handleFilterSelect(filter.id)}
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
