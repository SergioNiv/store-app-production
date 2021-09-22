import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ShoppingCartScreen } from '../Components/cart/ShoppingCartScreen';
import { ClothesDetails } from '../Components/clothes/ClothesDetails';
import { FooterScreen } from '../Components/footer/FooterScreen';
import { HomeScreen } from '../Components/home/HomeScreen';
import { ManScreen } from '../Components/main/ManScreen';
import { SearchScreen } from '../Components/main/SearchScreen';
import { WomanScreen } from '../Components/main/WomanScreen';
import { Navbar } from '../Components/navbar/Navbar';

export const DashBoardRouter = () => {
	//Guardar el último path renderizado
	const location = useLocation();
	localStorage.setItem('lastPath', location.pathname);

	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<Route exact path="/home" component={HomeScreen} />
					<Route exact path="/details/:clotId" component={ClothesDetails} />
					<Route exact path="/search/:name" component={SearchScreen} />
					<Route exact path="/woman" component={WomanScreen} />
					<Route exact path="/man" component={ManScreen} />
					<Route exact path="/cart" component={ShoppingCartScreen} />
					<Redirect to="/home" />
				</Switch>
			</div>
			<FooterScreen />
		</>
	);
};
