import { clothes } from '../data/clothes';

export const getClothesByName = (name = '') => {
	if (name === '') {
		return [];
	}

	name = name.toLocaleLowerCase();

	const listClothesByName = clothes.filter((clothes) =>
		clothes.name.toLocaleLowerCase().includes(name)
	);

	if (listClothesByName.length === 0) {
		return clothes.filter((clothes) => clothes.type === name);
	}

	return listClothesByName;
};
