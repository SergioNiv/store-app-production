import { types } from '../type/types';

export const setError = (err) => ({
	type: types.uiSetError,
	payload: err,
});

export const setRemoveError = () => ({
	type: types.uiRemoveError,
});

export const startLoading = () => ({
	type: types.uiStartLoading,
});

export const finishLoading = () => ({
	type: types.uiFinishLoading,
});

export const isLoggedIn = (name) => ({
	type: types.uiIsLoggedIn,
	payload: name,
});
export const isLoggedEnd = (name) => ({
	type: types.uiIsLoggedEnd,
	payload: name,
});
