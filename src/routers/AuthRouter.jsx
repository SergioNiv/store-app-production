import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../Components/auth/LoginScreen';
import { RegisterScreen } from '../Components/auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<figure className="auth__container-logo animate__animated animate__fadeIn animate__faster-3s">
				<img
					className="auth__img"
					src="../assets/logos/logo-login-white.png"
					alt=""
				/>
			</figure>
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginScreen} />

					<Route exact path="/auth/register" component={RegisterScreen} />

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
