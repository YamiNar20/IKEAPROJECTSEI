import React, { useState } from 'react';
import { signUp, login } from '../../utilities/users-services';
import { useNavigate } from 'react-router-dom';

function SignUpForm({
	setUserLoggedIn,
	setUser,
}) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirm: '',
		error: ''
	});

	const handleChange = (evt) => {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		});
	};

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const credentials = {
				email: formData.email,
				password: formData.password
			};

			const newUser = await signUp(formData);
			setUser(newUser);

			const loggedInUser = await login(credentials);
			setUser(loggedInUser);

			setUserLoggedIn(true);

			navigate('/');
		} catch (error) {
			console.error('Sign Up and Login Failed:', error);
			setFormData({
				...formData,
				error: 'Sign Up and Login Failed - Please try again.'
			});
		}
	};

	const disable = formData.password !== formData.confirm;

	return (
		<div>
			<div>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Username</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required
					/>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
					<label>Confirm Password</label>
					<input
						type="password"
						name="confirm"
						value={formData.confirm}
						onChange={handleChange}
						required
					/>
					<button type="submit" disabled={disable}>
						SIGN UP
					</button>
				</form>
			</div>
			<p className="error-message">&nbsp;{formData.error}</p>
		</div>
	);
}

export default SignUpForm;
