import { clothes } from '../data/clothes';

export const getClothesByGender = (gender) => {
	const validGener = ['mujer', 'hombre', null];

	if (!validGener.includes(gender)) {
		throw new Error(`Gender "${gender}" no es correcto`);
	}

	return clothes.filter((clothes) => clothes.gender === gender);
};
