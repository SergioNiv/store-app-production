import React, { useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { NavLogout } from './NavLogout';
import { useDispatch, useSelector } from 'react-redux';
import { filterSearchMenu, resetPageState } from '../../actions/filter';
import { getClothesByName } from '../../selectors/getClothesByName';

export const Navbar = () => {
	const [activeOpacity, setActiveOpacity] = useState(false);
	const [btnMenu, setBtnMenu] = useState(false);
	const [btnSearch, setBtnSearch] = useState(false);

	const { cartItems } = useSelector((state) => state.cart);

	const sumarItems = cartItems.reduce((sum, value) => sum + value.items, 0);
	const dispatch = useDispatch();
	const history = useHistory();

	const [values, handleInputChange, reset] = useForm({ name: '' });
	const { name } = values;

	const guide = useMemo(() => getClothesByName(name), [name]);

	//TODO: botón de scroll en la posición 0 de windows
	/* 	window.scroll({
		top: 100,
		left: 0,
		behavior: 'smooth',
	});
 */
	const handleSubmitSearch = (e) => {
		e.preventDefault();
		if (name.trim().length < 1) {
			return;
		}
		dispatch(filterSearchMenu(name));
		history.push(`/search/${name}`);
		setActiveOpacity(false);
		setBtnSearch(false);
		reset();

		localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
		dispatch(resetPageState());
	};
	const handleSubmitSearchForDesktop = () => {
		//TODO: implementar una ayuda en el buscador
		setBtnMenu(false);
		setActiveOpacity(true);
		reset();
	};

	const handleBtnMan = () => {
		setBtnMenu(!btnMenu);
		setActiveOpacity(false);
		localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
		dispatch(resetPageState());
	};
	const handleBtnWoman = () => {
		setBtnMenu(!btnMenu);
		setActiveOpacity(false);
		localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
		dispatch(resetPageState());
	};

	const handleBtnSearch = () => {
		setBtnSearch(!btnSearch);
		setBtnMenu(false);
		setActiveOpacity(true);
		if (btnMenu) {
			setActiveOpacity(true);
		}
	};
	const handleBtnMenu = () => {
		setBtnMenu(!btnMenu);
		setBtnSearch(false);
		setActiveOpacity(!activeOpacity);
		if (btnSearch) {
			setActiveOpacity(true);
		}
	};
	const handleOpacity = () => {
		setBtnMenu(false);
		setBtnSearch(false);
		setActiveOpacity(false);
		reset();
	};

	const handleBtnLogo = () => {
		history.push('/');
		setBtnMenu(false);
		setBtnSearch(false);
		setActiveOpacity(false);
	};

	return (
		<>
			<div className={`${activeOpacity && 'block-relleno'}`}></div>
			<div className={`nav__container ${activeOpacity && 'fixed'}`}>
				<nav className="nav">
					<figure className="nav__logo">
						<img
							src="../assets/logos/logo-white2.png"
							alt="Logo"
							className="nav__logo-img"
							onClick={handleBtnLogo}
						/>
					</figure>

					<form onSubmit={handleSubmitSearch} className="nav__search-desktop">
						<div className="nav__search-container__desktop">
							<input
								className="nav__search-input__desktop"
								placeholder="¿Qué estas buscando?"
								autoComplete="off"
								type="text"
								name="name"
								value={name}
								onChange={handleInputChange}
								onClick={handleSubmitSearchForDesktop}
							/>
							<i className="fas fa-search" onClick={handleSubmitSearch}></i>
						</div>
						{guide.length !== 0 && (
							<div className="search__guide-desktop">
								<div className="guide__container-dektop">
									{guide.map((clothes) => (
										<div
											onClick={() => {
												history.push(`/details/${clothes.id}`);
												setActiveOpacity(false);
												setBtnSearch(false);
												reset();
											}}
											className="guide__option-desktop"
											key={clothes.id}
										>
											<span className="guide__option-link">{clothes.name}</span>
										</div>
									))}
								</div>
							</div>
						)}
					</form>

					<button onClick={handleBtnSearch} className="nav__btn-search">
						<i className="fas fa-search"></i>
						<span className="btn__search-text">Buscar</span>
					</button>

					<Link
						to="/cart"
						className="nav__btn-store"
						onClick={() => {
							setBtnMenu(false);
							setActiveOpacity(false);
						}}
					>
						<span className="store__indicator">{sumarItems}</span>
						<i className="fas fa-cart-plus"></i>
						<span className="nav__store-car">Carrito</span>
					</Link>

					<NavLogout />

					<div className="nav__categories">
						<div className="btn__menu" onClick={handleBtnMenu}>
							<div className="menu-activador">
								<div className={`menu__ancla ${btnMenu && 'menu-abierto'}`}>
									<span className="menu-activador-linea"></span>
									<span className="menu-activador-linea"></span>
									<span className="menu-activador-linea"></span>
								</div>
							</div>
							<span className="nav__cat-text" onClick={handleBtnMenu}>
								Categorías
							</span>
						</div>

						<div
							className={`nav__menu animate__animated animate__fadeIn animate__faster-3s ${
								btnMenu && 'activeMenu'
							}`}
						>
							<Link
								to="/woman"
								onClick={handleBtnWoman}
								className="nav__menu-link"
								style={{ textDecoration: 'none' }}
							>
								Moda mujer
							</Link>
							<Link
								to="/man"
								onClick={handleBtnMan}
								className="nav__menu-link radius--bottom "
								style={{ textDecoration: 'none' }}
							>
								Moda hombre
							</Link>
						</div>
					</div>
				</nav>

				<form
					onSubmit={handleSubmitSearch}
					className={`nav__search animate__animated animate__fadeIn animate__faster-3s ${
						btnSearch && 'activeSearch'
					}`}
				>
					<div className="nav__search-container">
						<input
							className="nav__search-input"
							placeholder="¿Qué estas buscando?"
							autoComplete="off"
							type="text"
							name="name"
							value={name}
							onChange={handleInputChange}
						/>
					</div>

					{guide.length !== 0 && (
						<div className="nav__search-guide">
							<div className="guide__container-options">
								{guide.map((clothes) => (
									<div
										onClick={() => {
											history.push(`/details/${clothes.id}`);
											setActiveOpacity(false);
											setBtnSearch(false);
											reset();
										}}
										className="guide__option"
										key={clothes.id}
									>
										{clothes.name}
									</div>
								))}
							</div>
						</div>
					)}
				</form>
			</div>
			<div
				className={`animate__animated animate__fadeIn animate__faster-3s ${
					activeOpacity && 'opacity'
				}`}
				onClick={handleOpacity}
			></div>
		</>
	);
};
