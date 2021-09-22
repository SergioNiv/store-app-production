import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ClothesCard } from './ClothesCard';
import { ClothesPaginationList } from './ClothesPaginationList';

export const ClothesList = () => {
	const { clothes } = useSelector((state) => state.filter);

	const { page } = useSelector((state) => state.filter);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
		<>
			{clothes.length === 0 && (
				<div className="search__alert">" No se encontró ningún elemento "</div>
			)}
			{clothes.length !== 0 && (
				<div className="container__grid_list">
					<div className="grid animate__animated animate__fadeIn animate__faster">
						{clothesData.map((clothes) => (
							<ClothesCard key={clothes.id} {...clothes} />
						))}
					</div>
					<ClothesPaginationList pagesTotal={pagesTotal} />
				</div>
			)}
		</>
	);
};
