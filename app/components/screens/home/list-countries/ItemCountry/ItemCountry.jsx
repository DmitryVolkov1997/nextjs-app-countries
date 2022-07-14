import classes from './ItemCountry.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ItemCountry = ({ name, flags, info = [] }) => {
	const router = useRouter()
	
	return (
		<div className={classes.card} onClick={()=> router.push(`/country/${name}`)}>
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
