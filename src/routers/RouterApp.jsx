import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { DashBoardRouter } from './DashBoardRouter';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { useState } from 'react';
import { isLoggedIn } from '../actions/ui';

export const RouterApp = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((usu) => {
			if (usu?.uid) {
				dispatch(login(usu.uid, usu.displayName));
				dispatch(isLoggedIn(usu.displayName));
			}
			setChecking(false);
		});
	}, [dispatch, checking]);

	if (checking) {
		return <div className="loader">Loading...</div>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={AuthRouter} />
					<Route path="/" component={DashBoardRouter} />
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
