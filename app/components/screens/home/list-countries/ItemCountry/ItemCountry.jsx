import classes from './ItemCountry.module.scss'
import Image from 'next/image'

const ItemCountry = ({ name, flags, info = [] }) => {
	return (
		<div className={classes.card}>
			<Image className={classes.img} src={flags} width={'320px'} height={'160px'}objectFit={'cover'} objectPosition={'center'} alt={name} />
			<div className={classes.info}>
				<h5 className={classes.title}>{name}</h5>
				<div className={classes.body}>
					{
						info.map(country => (
							<p key={country.title}><strong className={classes.strong}>{country.title}:</strong>&nbsp; {country.description}</p>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default ItemCountry
