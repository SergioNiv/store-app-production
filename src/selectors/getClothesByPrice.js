import { getClothesByGender } from './getClothesByGender';

export const getClothesByPrice = (order, gender) => {
	const clothes = getClothesByGender(gender);

	const validOrder = ['ascendente', 'descendente'];

	if (!validOrder.includes(order)) {
		throw new Error(`order "${order}" no es correcto`);
	}

	if (order === 'ascendente') {
		return clothes.sort((x, y) => {
			return x.price - y.price;
		});
	} else {
		return clothes.sort((x, y) => {
			return y.price - x.price;
		});
	}
};
