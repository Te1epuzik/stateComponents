import classes from './dropdownList.module.scss';
import { useState } from 'react';

export const DropdownList = ({ dropdownActive, options }) => {

	const [selectedPosition, setSelectedPosition] = useState(null);
	const handleSelectPosition = event => {
		if (!event.target.className.includes('dropdown-list__item')) {
			setSelectedPosition(null)
			return;
		}

		setSelectedPosition(+event.target.getAttribute('id'))
	};

	return (
		<ul
			className={`${classes['dropdown-list']} ${dropdownActive ? classes['dropdown-list--active'] : ''}`}
			onClick={handleSelectPosition}>
			{options.map(option =>
				<li
					className={`${classes['dropdown-list__item']} ${selectedPosition === option.key ? classes['dropdown-list__item--active'] : ''}`}
					id={option.key} 
					key={option.key}>
					{option.name}
				</li>
			)}
		</ul>
	)
}
