import Search from './search/Search'
import classes from './Home.module.scss'
import Container from '../../container/Container'
import CustomSelect from './select/Select'
import { useEffect } from 'react'
import axios from 'axios'
import { ALL_COUNTRIES } from '../../../config'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries } from '../../../store/countriesSlice/countriesSlice'
import ListCountries from './list-countries/ListCountries'


const Home = () => {
	const dispatch = useDispatch()
	const { countries } = useSelector(state => state.countries)
	
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(ALL_COUNTRIES)
			dispatch(setCountries({ data }))
		}
		fetchData()
	}, [])
	
	return (
		<div className={classes.main}>
			<Container>
				<div className={classes.filter}>
					<Search />
					<CustomSelect />
				</div>
				<div className={classes.content}>
					{countries.length ? <ListCountries countries={countries}/>: <h1>Ничего нет</h1>}
				</div>
			</Container>
		</div>
	)
}

export default Home
