import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { cartReducer } from '../reducers/cartReducer';
import { filterReducer } from '../reducers/filterReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	filter: filterReducer,
	cart: cartReducer,
});

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
