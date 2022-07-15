import Search from './search/Search'
import classes from './Home.module.scss'
import Container from '../../container/Container'
import CustomSelect from './select/Select'
import { useEffect } from 'react'
import axios from 'axios'
import { ALL_COUNTRIES } from '../../../config'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries, setFilteredCountries } from '../../../store/countriesSlice/countriesSlice'
import ListCountries from './list-countries/ListCountries'
import { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

const Home = () => {
	const dispatch = useDispatch()
	const { countries, filteredCountries } = useSelector(state => state.countries)
	const { search } = useSelector(state => state.search)
	const [region, setRegion] = useState('')
	
	const handleSearch = (search, region) => {
		let data = [...countries]
		if (search) {
			data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
		}
		
		if (region) {
			data = data.filter(country => country.region.includes(region))
		}
		dispatch(setFilteredCountries({ data }))
	}
	
	useEffect(() => {
		if (!countries.length) {
			const fetchData = async () => {
				const { data } = await axios.get(ALL_COUNTRIES)
				dispatch(setCountries({ data }))
			}
			fetchData()
		}
	}, [])
	
	useEffect(() => {
		handleSearch()
	}, [countries])
	
	useEffect(() => {
		const regionValue = region?.value || ''
		handleSearch(search, regionValue)
	}, [search, region])
	
	
	return (
		<div className={classes.main}>
			<Container>
				<div className={classes.filter}>
					<Search onSearch={handleSearch} />
					<CustomSelect setRegion={setRegion} />
				</div>
				<div className={classes.content}>
					{filteredCountries.length ? <ListCountries countries={filteredCountries} /> :
						<div className={classes.preloader}><TailSpin color='#00BFFF' height={80} width={80} /></div>}
				</div>
			</Container>
		</div>
	)
}

export default Home
