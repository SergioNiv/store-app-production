import { getClothesByGender } from './getClothesByGender';

export const getClothesByColor = (color, gender) => {
	const clothes = getClothesByGender(gender);

	const validType = [
		'Turquesa',
		'Negro',
		'Amarillo',
		'Blanco',
		'Celeste',
		'Verde',
		'Azul',
		'Café',
		'Gris',
		'Rojo',
		'Piel',
		null,
	];

	if (!validType.includes(color)) {
		throw new Error(`Color "${color}" no es correcto`);
	}

	return clothes.filter((clothes) => clothes.characters[0].color === color);
};
