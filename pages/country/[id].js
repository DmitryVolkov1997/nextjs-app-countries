import axios from 'axios'
import { ALL_COUNTRIES, filterByCodes } from '../../app/config'
import classes from './Details.module.scss'
import Container from '../../app/components/container/Container'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Info from '../../app/components/screens/home/detail-info/Info'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNeighbors } from '../../app/store/neighborsSlice/neighborsSlice'

export const getStaticPaths = async () => {
	const { data } = await axios.get(ALL_COUNTRIES)
	const paths = data.map(country => ({
		params: { id: country.name }
	}))
	
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.id
	const { data } = await axios.get(`https://restcountries.com/v2/name/${id}`)
	
	return {
		props: { data: data[0] }
	}
}

const Details = ({ data }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { neighbors } = useSelector(state => state.neighbors)
	const { borders = [] } = data
	
	useEffect(() => {
		if (borders.length) {
			const fetchData = async () => {
				const { data } = await axios.get(filterByCodes(borders))
				dispatch(setNeighbors({ data }))
			}
			fetchData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [borders])
	
	return (
		<div className={classes.details}>
			<Container>
				<div className={classes.content}>
					<button className={classes.btnBack} onClick={() => router.back()}>
						<MdOutlineKeyboardBackspace size={22} className={classes.icon} />
						Back
					</button>
					<div className={classes.row}>
						<div className={classes.info}>
							<Info data={data} neighbors={neighbors} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Details
