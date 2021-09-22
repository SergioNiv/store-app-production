import { getClothesByColor } from '../selectors/getClothesByColor';
import { getClothesByGender } from '../selectors/getClothesByGender';
import { getClothesByName } from '../selectors/getClothesByName';
import { getClothesByPrice } from '../selectors/getClothesByPrice';
import { getClothesByType } from '../selectors/getClothesByType';
import { types } from '../type/types';

export const filterClothesByGender = (gender) => ({
	type: types.filterBygender,
	payload: {
		gender,
		clothes: getClothesByGender(gender),
	},
});

export const filterClothesByType = (type, gender) => ({
	type: types.filterByType,
	payload: getClothesByType(type, gender),
});

export const filterClothesByColor = (color, gender) => ({
	type: types.filterByColor,
	payload: getClothesByColor(color, gender),
});

export const filterClothesByPrice = (order, gender) => ({
	type: types.filterByPrice,
	payload: getClothesByPrice(order, gender),
});

export const clothesLogoutCleaning = () => ({
	type: types.filterLogoutCleaning,
});

export const filterSearchMenu = (name) => ({
	type: types.filterSearchMenu,
	payload: getClothesByName(name),
});

export const pageState = (num) => ({
	type: types.filterPaginationState,
	payload: num,
});

export const resetPageState = () => ({
	type: types.filterResetPaginationState,
});
