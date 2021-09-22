import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { modifyPriceTotal } from '../../actions/cart';
import { ItemCart } from './ItemCart';
import { ShoppingModal } from './ShoppingModal';

export const ShoppingCartScreen = ({ history }) => {
	const { cartItems, totalPrice } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const sumarItems = cartItems.reduce((sum, value) => sum + value.items, 0);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0); //desplazar a la parte superior del DOM al hacer render
	}, []);

	useEffect(() => {
		dispatch(modifyPriceTotal());
	}, [cartItems, dispatch]);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const handleClick = () => {
		history.push('/');
	};

	return (
		<div className="animate__animated animate__fadeIn animate__faster-3s">
			<div className="cart__container">
				<div
					className={`cart__resumen ${
						cartItems.length === 0 && 'cart__resumen-disabled'
					}`}
				>
					<div className="container__resumen">
						<h3 className="cart__title">Carrito de Compras</h3>
						<span className="cart__products">{sumarItems} Productos</span>
						<h5 className="cart__subtitle">
							<i className="fas fa-cart-plus"></i> Resumen de compra
						</h5>
						<div className="cart__price-container">
							<span className="cart__text-total">Total</span>
							<span className="cart__price-total">S/. {totalPrice}</span>
						</div>
						{cartItems.length === 0 ? (
							<div className="cart__btn-container-desktop">
								<button className="cart__btn-desktop" onClick={handleClick}>
									Agrega tus prendas favoritas
								</button>
							</div>
						) : (
							<div className="cart__btn-container-desktop">
								<button
									className="cart__btn-desktop"
									onClick={() => setIsOpen(!isOpen)}
								>
									Ir a pagar
								</button>
								<ShoppingModal openModal={isOpen} setIsOpen={setIsOpen} />
							</div>
						)}
					</div>
				</div>

				{cartItems.length !== 0 && (
					<div className="cart__item-container">
						{cartItems.map((item) => (
							<ItemCart
								key={`${item.id}${item.sizeSelect}`}
								{...item}
								totalPrice={totalPrice}
							/>
						))}
					</div>
				)}

				{cartItems.length === 0 ? (
					<div className="cart__btn-container" onClick={handleClick}>
						<button className="cart__btn">Agrega tus prendas favoritas</button>
					</div>
				) : (
					<div className="cart__btn-container">
						<button className="cart__btn">Ir a pagar todo</button>
					</div>
				)}
			</div>

			<div className="link_shopping-continue">
				<Link className="link_shopping-continue" to="/">
					Seguir comprando
				</Link>
			</div>
		</div>
	);
};
