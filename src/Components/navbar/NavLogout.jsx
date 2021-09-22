import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Startlogout } from '../../actions/auth';
import { clothesLogoutCleaning } from '../../actions/filter';
import { isLoggedEnd } from '../../actions/ui';

export const NavLogout = () => {
	const { name } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(Startlogout());
		dispatch(isLoggedEnd());
		dispatch(clothesLogoutCleaning());
	};

	return (
		<Link to="/auth/login" className="nav__login" onClick={handleLogout}>
			<i className="fas fa-sign-in-alt"></i>
			<span className="nav__login-name">{name ? name : 'Ingresar'}</span>
		</Link>
	);
};
