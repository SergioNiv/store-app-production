import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterClothesByGender } from '../../actions/filter';
import { ClothesList } from '../clothes/ClothesList';
import { FilterScreen } from './FilterScreen';

export const ManScreen = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(filterClothesByGender('hombre'));
	}, [dispatch]);

	return (
		<div className="container__result-clothes">
			<FilterScreen />
			<ClothesList />
		</div>
	);
};
