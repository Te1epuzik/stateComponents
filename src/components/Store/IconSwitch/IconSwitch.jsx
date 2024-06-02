import classes from './iconSwitch.module.scss';

export const IconSwitch = ({ viewVariant, onSwitch }) => {


	const handleSwicthView = event => {

		if (event.target.getAttribute('data-view') === 'module') {
			event.target.setAttribute('data-view', 'list');
		} else {
			event.target.setAttribute('data-view', 'module');
		}

		onSwitch(event.target.getAttribute('data-view'));
	};

	return (
		<div
			className={classes['icon-switch'] + ' ' + 'material-icons'}
			onClick={handleSwicthView}
			data-view='module'>
				{viewVariant === 'module' ? 'view_list' : 'view_module'}
			</div>
	)
}
