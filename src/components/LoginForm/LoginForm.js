import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersServices from '../../utilities/users-services';

export default function LoginForm({ setUser }) {
	const navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	const [showPassword, setShowPassword] = useState(false);

	function handleChange(e) {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
		setError('');
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const user = await usersServices.login(credentials);
			setUser(user);
			navigate('/ikea');
		} catch (error) {
			setError('Login Failed - Try Again');
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Email</label>
					<input
						type="text"
						name="email"
						value={credentials.email}
						onChange={handleChange}
						required
					/>
					<label>Password</label>
					<div className="password-input">
						<input
							type={showPassword ? 'text' : 'password'}
							name="password"
							value={credentials.password}
							onChange={handleChange}
							required
						/>
						<button
							type="button"
							className="password-toggle-button"
							onClick={togglePasswordVisibility}
						>
							{showPassword ? '👁️' : '👁️‍🗨️'}
						</button>
					</div>
					<button type="submit">Log In</button>
				</form>
			</div>
			<p className="error-message">{error}</p>
		</div>
	);
}
