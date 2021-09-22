import { clothes } from '../data/clothes';

export const getClothesById = (id) => {
	return clothes.find((clothes) => clothes.id === id);
};
