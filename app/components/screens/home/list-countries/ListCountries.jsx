import classes from './ListCountries.module.scss'
import ItemCountry from './ItemCountry/ItemCountry'

const ListCountries = ({ countries = [] }) => {
	return (
		<div className={classes.list}>
			{
				countries.map(country => {
					const infoCountry = {
						name: country.name,
						flags: country.flags.svg,
						info: [
							{
								title: 'Population',
								description: country.population
							},
							{
								title: 'Region',
								description: country.region
							},
							{
								title: 'Capital',
								description: country.capital
							}
						]
					}
					return <ItemCountry key={country.name} {...infoCountry} />
				})
			}
		</div>
	)
}

export default ListCountries
