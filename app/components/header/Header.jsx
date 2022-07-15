import classes from './Header.module.scss'
import Container from '../container/Container'
import Link from 'next/link'
import { FaMoon } from 'react-icons/fa'

const Header = () => {
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.row}>
					<Link href={'/'}>
						<a className={classes.logo}>Where in the world</a>
					</Link>
				<FaMoon size={25} />
				</div>
			</Container>
		</header>
	)
}

export default Header
