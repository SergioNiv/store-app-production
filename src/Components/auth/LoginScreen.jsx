import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {
	startGoogleLogin,
	startLoginWithEmailPassword,
} from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {
	const dispatch = useDispatch();

	const lastPath = localStorage.getItem('lastPath'); //regresar a la última página visitada

	const { ui } = useSelector((state) => state);
	const { loading, isLoggedIn } = ui;

	const [formValues, handleInputChange] = useForm({
		email: 'prueba-mayra@gmail.com',
		password: 'Devdabot123',
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginWithEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	useEffect(() => {
		if (isLoggedIn) {
			history.replace(lastPath);
		}
	}, [isLoggedIn, history, lastPath]);

	return (
		<div className="animate__animated animate__fadeIn animate__faster-3s">
			<h3 className="auth__title">Acceso</h3>

			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>

				<button type="submit" className="btn" disabled={loading}>
					Iniciar sesión
				</button>

				<div className="auth__social-networks">
					<p>Iniciar sesión con redes sociales</p>

					<div className="google-btn" onClick={handleGoogleLogin}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Iniciar con Google</b>
						</p>
					</div>
				</div>

				<Link to="/auth/register" className="link">
					Crear nueva cuenta
				</Link>

				<Link to="/" className="continue">
					Continuar sin iniciar sesión
				</Link>
			</form>
		</div>
	);
};
