import classes from './dropdownList.module.scss';
import { useState } from 'react';

export const DropdownList = ({ dropdownActive, options }) => {

	const [selectedPosition, setSelectedPosition] = useState(null);
	const handleSelectPosition = selectedPosition => {
		setSelectedPosition(selectedPosition);
	};

	return (
		<ul
			className={`${classes['dropdown-list']} ${dropdownActive ? classes['dropdown-list--active'] : ''}`}>
			{options.map(option =>
				<li
					onClick={() => handleSelectPosition(option.key)}
					className={`${classes['dropdown-list__item']} ${selectedPosition === option.key ? classes['dropdown-list__item--active'] : ''}`}
					id={option.key}
					key={option.key}>
					{option.name}
				</li>
			)}
		</ul>
	)
}
