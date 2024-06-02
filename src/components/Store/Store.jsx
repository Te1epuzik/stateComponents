import { IconSwitch } from './IconSwitch';
import { Products } from './Products';
import classes from './store.module.scss';
import { useState } from 'react';

export const Store = () => {
	const products = [{
		name: "Nike Metcon 2",
		price: "130",
		color: "red",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
	}, {
		name: "Nike Metcon 2",
		price: "130",
		color: "green",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
	}, {
		name: "Nike Metcon 2",
		price: "130",
		color: "blue",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
	}, {
		name: "Nike Metcon 2",
		price: "130",
		color: "black",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
	}, {
		name: "Nike free run",
		price: "170",
		color: "black",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
	}, {
		name: "Nike Metcon 3",
		price: "150",
		color: "green",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
	}];

	products.forEach((product, index) => {
		product.key = index;
	});

	console.log(products);

	const [viewVariant, setViewVariant] = useState('module');
	const handleSwitchView = (viewVariant) => {
		setViewVariant(viewVariant);
	}

	return (
		<div className={classes['store']}>
			<IconSwitch viewVariant={viewVariant} onSwitch={handleSwitchView} />
			<Products viewVariant={viewVariant} products={products}/>
		</div>
	)
}
