import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClothesCard } from './ClothesCard';
import { FilterScreen } from '../main/FilterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchMenu } from '../../actions/filter';
import { ClothesPaginationList } from './ClothesPaginationList';

export const ClothesSearchResults = () => {
	const { name } = useParams();
	const dispatch = useDispatch();
	//const parseClothes = JSON.parse(name);
	const { clothes } = useSelector((state) => state.filter);

	const { page } = useSelector((state) => state.filter);

	useEffect(() => {
		dispatch(filterSearchMenu(name));
	}, [name, dispatch]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	const clothesScreen = 12;

	const pagesTotal = Math.ceil(clothes.length / clothesScreen); //total de páginas

	const clothesData = clothes.slice(
		(page - 1) * clothesScreen,
		page * clothesScreen
	);
	return (
		<div className="container__result-clothes animate__animated animate__fadeIn animate__faster-3s">
			<FilterScreen />
			{name !== '' && clothes.length === 0 && (
				<div className="search__alert">No se encontró "{name}"</div>
			)}
			{clothes.length !== 0 && (
				<div className="container__grid_list">
					<div className="grid">
						{clothesData.map((clot) => (
							<ClothesCard key={clot.id} {...clot} />
						))}
					</div>
					<ClothesPaginationList pagesTotal={pagesTotal} />
				</div>
			)}
		</div>
	);
};
