import classes from './dropdown.module.scss';
import { DropdownList } from './DropdownList';
import { useState } from 'react';

export const Dropdown = () => {
	const options = [
		{name: 'Profile Information', key: 0},
		{name: 'Change Password', key: 1},
		{name: 'Become PRO', key: 2},
		{name: 'Help', key: 3},
		{name: 'Log Out', key: 4},
	];

	const [dropdownActive, setDropdownActive] = useState(false);

	const handleDropdownActivate = () => {
		setDropdownActive(!dropdownActive);
	};

	return (
		<div className={classes['dropdown']}>
			<button className={classes['dropdown__button']} onClick={handleDropdownActivate}>
				account settings
				<span className={classes['dropdown__icon'] + ' ' + 'material-symbols-outlined'}>
					Globe
				</span>
			</button>
			<DropdownList dropdownActive={dropdownActive} options={options}/>
		</div>
	)
}
