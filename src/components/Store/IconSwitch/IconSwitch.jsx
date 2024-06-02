import classes from './iconSwitch.module.scss';

export const IconSwitch = ({ viewVariant, onSwitch }) => {


	const handleSwicthView = viewVariant => {
		if (viewVariant === 'module') {
			onSwitch('list');
		} else {
			onSwitch('module');
		}
	};

	return (
		<div
			className={classes['icon-switch'] + ' ' + 'material-icons'}
			onClick={() => handleSwicthView(viewVariant)}>
				{viewVariant === 'module' ? 'view_list' : 'view_module'}
			</div>
	)
}
