import React from 'react';
import './styles/normalize.css';
import './styles/global.scss';

import { RouterApp } from './routers/RouterApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const MainApp = () => {
	return (
		<>
			<Provider store={store}>
				<RouterApp />
			</Provider>
		</>
	);
};
