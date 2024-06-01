import { useState } from 'react';
import classes from './main.module.scss';
import { Filter } from '../Filter';
import { Works } from '../Works';

export const Portfolio = ({ images, filters }) => {

	const parsedImages = [];
	images.forEach((image, index) => {
		parsedImages.push({ ...image, key: index });
	});

	const [finalImages, setFinalImages] = useState(parsedImages);

	const handleFilterSelect = (finalImages) => {
		setFinalImages(finalImages);
	}

	return (
		<div className={classes['portfolio']}>
			<Filter filters={filters} onClick={handleFilterSelect} images={images} />
			<Works images={finalImages} />
		</div>
	)
}
