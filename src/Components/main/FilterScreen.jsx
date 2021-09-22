import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	filterClothesByColor,
	filterClothesByPrice,
	filterClothesByType,
	resetPageState,
} from '../../actions/filter';

export const FilterScreen = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { gender } = useSelector((state) => state.filter);

	const [filterState, setFilterState] = useState(false);
	const [orderState, setOrderState] = useState(false);

	const handleActiveFilter = () => setFilterState(!filterState);
	const handleActiveOrder = () => setOrderState(!orderState);

	return (
		<div className="filter">
			<div className="container__filter-sticky">
				<div className="filter__type">
					<div onClick={handleActiveFilter} className="type__title-container">
						<span className="type__title">
							<i className="fas fa-filter"></i>Filtrar
						</span>
					</div>
					<div
						className={`type__menu-black ${filterState && 'activeFilterType'}`}
						onClick={() => setFilterState(!filterState)}
					>
						<ul className="type__menu">
							<button onClick={handleActiveFilter} className="btn__back">
								Atrás
							</button>
							<details className="filter__details-container" open>
								<summary className="type__menu-link">Tipo</summary>
								<ul className="type__submenu">
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByType('polos', gender));
											gender || history.push('/search/polo');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Polo
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender &&
												dispatch(filterClothesByType('sueteres', gender));
											gender || history.push('/search/sueter');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Sueter
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender &&
												dispatch(filterClothesByType('pantalones', gender));
											gender || history.push('/search/pantalones');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Pantalón
									</li>
									{gender === 'mujer' && (
										<li
											className="type__submenu-link"
											onClick={() => {
												gender &&
													dispatch(filterClothesByType('blusas', gender));
												gender || history.push('/search/blusas');
												localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
												dispatch(resetPageState());
											}}
										>
											Blusa
										</li>
									)}

									{gender === 'hombre' && (
										<li
											className="type__submenu-link"
											onClick={() => {
												gender &&
													dispatch(filterClothesByType('camisas', gender));
												gender || history.push('/search/camisa');
												localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
												dispatch(resetPageState());
											}}
										>
											Camisa
										</li>
									)}

									{gender === null && (
										<>
											<li
												className="type__submenu-link"
												onClick={() => {
													gender &&
														dispatch(filterClothesByType('blusas', gender));
													gender || history.push('/search/blusas');
													localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
													dispatch(resetPageState());
												}}
											>
												Blusa
											</li>
											<li
												className="type__submenu-link"
												onClick={() => {
													gender &&
														dispatch(filterClothesByType('camisas', gender));
													gender || history.push('/search/camisa');
													localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
													dispatch(resetPageState());
												}}
											>
												Camisa
											</li>
										</>
									)}
								</ul>
							</details>

							<details className="filter__details-container" open>
								<summary className="type__menu-link">Color</summary>
								<ul className="type__submenu">
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Negro', gender));
											gender || history.push('/search/negro');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Negro
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender &&
												dispatch(filterClothesByColor('Turquesa', gender));
											gender || history.push('/search/turquesa');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Turquesa
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender &&
												dispatch(filterClothesByColor('Amarillo', gender));
											gender || history.push('/search/amarillo');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Amarillo
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender &&
												dispatch(filterClothesByColor('Blanco', gender));
											gender || history.push('/search/blanco');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Blanco
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender &&
												dispatch(filterClothesByColor('Celeste', gender));
											gender || history.push('/search/celeste');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Celeste
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Verde', gender));
											gender || history.push('/search/verde');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Verde
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Azul', gender));
											gender || history.push('/search/azul');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Azul
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Café', gender));
											gender || history.push('/search/café');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Café
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Gris', gender));
											gender || history.push('/search/gris');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Gris
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Rojo', gender));
											gender || history.push('/search/rojo');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Rojo
									</li>
									<li
										className="type__submenu-link"
										onClick={() => {
											gender && dispatch(filterClothesByColor('Piel', gender));
											gender || history.push('/search/piel');
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Piel
									</li>
								</ul>
							</details>
						</ul>
					</div>
				</div>
				<div className="filter__order">
					<div onClick={handleActiveOrder} className="order__title-container">
						<span className="order__title">
							<i className="fas fa-sort"></i>Ordenar
						</span>
					</div>
					<div
						className={`order__menu-black ${orderState && 'activeFilterType'}`}
						onClick={() => setOrderState(!orderState)}
					>
						<ul className="order__menu">
							<button onClick={handleActiveOrder} className="btn__back">
								Atrás
							</button>
							<details className="filter__details-container" open>
								<summary className="order__menu-link">Por precio</summary>
								<ul className="order__submenu">
									<li
										className="order__submenu-link"
										onClick={() => {
											dispatch(filterClothesByPrice('ascendente', gender));
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Ascendente
									</li>
									<li
										className="order__submenu-link"
										onClick={() => {
											dispatch(filterClothesByPrice('descendente', gender));
											localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
											dispatch(resetPageState());
										}}
									>
										Descendente
									</li>
								</ul>
							</details>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
