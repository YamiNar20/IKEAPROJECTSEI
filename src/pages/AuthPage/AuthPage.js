import { useState } from 'react';
import styles from './AuthPage.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser, user, cart, setCart }) {
	const [showLogin, setShowLogin] = useState(true);
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	return (
		<div>
			{user.isLoggedIn ? (
				<div>
					<h1>Welcome, {user.username}!</h1>
				</div>
			) : (
				<div>
					<h1>Welcome to our website!</h1>
					<p>You are currently a guest user. Please sign up or log in.</p>
					<main className={styles.AuthPage}>
						<div>
							<h3 onClick={() => setShowLogin(!showLogin)}>
								{showLogin ? 'SIGN UP' : 'LOG IN'}
							</h3>
						</div>
						{showLogin ? (
							<LoginForm setUser={setUser} />
						) : (
							<SignUpForm setUserLoggedIn={setUserLoggedIn} setUser={setUser} />
						)}
					</main>
				</div>
			)}
		</div>
	);
}
