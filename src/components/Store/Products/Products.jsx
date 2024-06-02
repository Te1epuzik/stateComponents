import classes from './products.module.scss';

export const Products = ({ viewVariant, products }) => {

	const productVariant = viewVariant === 'module' ? '--module' : '--list';

	return (
		<div className={classes['products'] + ' ' + classes['products' + productVariant]}>
			{products.map(product =>
				<div className={classes['product'] + ' ' + classes['product' + productVariant]}>
					<img
						className={classes['product__img'] + ' ' + classes['product__img' + productVariant]}
						src={product.img} />
					<div className={classes['product__info'] + ' ' + classes['product__info' + productVariant]}>
						<h2
							className={classes['product__name'] + ' ' + classes['product__name' + productVariant]}>
							{product.name}
						</h2>
						<span
							className={classes['product__color'] + ' ' + classes['product__color' + productVariant]}>
							{product.color}
						</span>
					</div>
					<div className={classes['product__footer'] + ' ' + classes['product__footer' + productVariant]}>
						<span
							className={classes['product__price'] + ' ' + classes['product__price' + productVariant]}>
							{'$' + product.price}
						</span>
						<button
							className={classes['product__add-to-cart'] + ' ' + classes['product__add-to-cart' + productVariant]}
							type='button'>add to cart</button>
					</div>
				</div>
			)}
		</div>
	)
}
