import classes from './Info.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Info = ({ data, neighbors = [] }) => {
	const {
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		flag,
		topLevelDomain = [],
		currencies = [],
		languages = [],
		borders = []
	} = data
	
	const router = useRouter()
	
	return (
		<div className={classes.info}>
			<Image src={flag} alt={name} width={'600px'} height={'400px'} objectFit={'cover'} objectPosition={'center'} />
			<div className={classes.box}>
				<h2 className={classes.title}>{name}</h2>
				<div className={classes.group}>
					<ul className={classes.list}>
						<li><strong>Native Name: {nativeName}</strong></li>
						<li><strong>Population: </strong>{population}</li>
						<li><strong>Region: </strong>{region}</li>
						<li><strong>Sub Region: </strong>{subregion}</li>
						<li><strong>Capital: </strong>{capital}</li>
					</ul>
					<ul className={classes.list}>
						<li><strong>Top Level Domain: </strong>
							{topLevelDomain.map(country => country)}
						</li>
						<li><strong>Currency: </strong>
							{currencies.map(country => country.name)}
						</li>
						<li><strong>Languages: </strong>
							{languages.map(country => `${country.name} `)}
						</li>
					</ul>
				</div>
				<div className={classes.borders}>
					<p className={classes.border__title}>Border Countries:</p>
					<div className={classes.links}>
						{
							neighbors.length ? neighbors.map(country => (
								<span key={country.name}
								      onClick={() => router.push(`/country/${country.name}`)}>{`${country.name} `}</span>)) : 'There is no border country'
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
