import axios from 'axios'
import { ALL_COUNTRIES, filterByName } from '../../app/config'
import classes from './Details.module.scss'
import Container from '../../app/components/container/Container'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Info from '../../app/components/screens/home/detail-info/Info'
import { useRouter } from 'next/router'

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
							<Info data={data} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Details
