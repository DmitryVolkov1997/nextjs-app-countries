import classes from './Search.module.scss'
import { GoSearch } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../../../store/searchSlice/searchSlice'

const Search = () => {
	const dispatch = useDispatch()
	const { search } = useSelector(state => state.search)
	
	const handleSearch = (e) => {
		dispatch(setSearch({ search: e.target.value }))
	}
	
	return (
		<label className={classes.label}>
			<GoSearch className={classes.icon} size={18} />
			<input className={classes.input} type='search' value={search} placeholder={'Search for a country...'}
			       onChange={handleSearch} />
		</label>
	)
}

export default Search
