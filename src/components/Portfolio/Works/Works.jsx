import classes from './works.module.css';

export const Works = ({ images }) => {
	return (
		<div className={classes['works']}>
			{images.map(image =>
				<img src={image.img} key={image.key} className={classes['works__img']} />
			)}
		</div>
	)
}
