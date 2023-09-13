import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Logo from '../Logo/Logo';

export default function NavBar({ AboutUs, Shop, Jobs }) {
	return (
		<main className={styles.Links}>
			<div className={styles.NavBarLinks}>
				<a href="/HomeScreen">About Us</a>
				<a href="/shop">Shop</a>
				<a href="/HomeScreen">Jobs</a>
			</div>
		</main>
	);
}
