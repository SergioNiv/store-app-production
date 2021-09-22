export const types = {
	login: '[auth] Login',
	logout: '[auth] Logout',

	uiSetError: '[UI] Set error',
	uiRemoveError: '[UI] Remove error',
	uiStartLoading: '[UI] Start loading',
	uiFinishLoading: '[UI] Finish loading',
	uiIsLoggedIn: '[UI] Is logged in',
	uiIsLoggedEnd: '[UI] Is logged end',

	filterBygender: '[filter] Get clothes by gender ',
	filterByType: '[filter] Get clothes by type',
	filterByColor: '[filter] Get clothes by color',
	filterByPrice: '[filter] Get clothes by price',
	filterLogoutCleaning: '[filter] Clothes logout cleaning ',
	filterSearchMenu: '[filter] Filter search menu ',
	filterPaginationState: '[filter] Filter pagination state',
	filterResetPaginationState: '[filter] Filter reset pagination state',

	cartAddINewItem: '[cart] Add new item',
	cartDeleteItem: '[cart] Delete item',
	cartPriceTotal: '[cart] Price total',
	cartIncrementTotalPrice: '[cart] Increment total price',
	cartDecrementTotalPrice: '[cart] Decrement total price',
};
