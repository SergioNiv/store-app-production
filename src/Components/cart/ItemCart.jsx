import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	cartDeleteItem,
	decrementPriceTotal,
	incrementPriceTotal,
} from '../../actions/cart';

export const ItemCart = ({ name, sizeSelect, price, id, items }) => {
	const dispatch = useDispatch();

	const handleDecrement = () => {
		items > 1 && dispatch(decrementPriceTotal(price, id, sizeSelect));
	};
	const handleIncrement = () => {
		dispatch(incrementPriceTotal(price, id, sizeSelect));
	};

	const handleDeleteItem = () => {
		dispatch(cartDeleteItem(id, sizeSelect));
	};

	return (
		<div className="item__cart">
			<Link to={`/details/${id}`} className="container__cart">
				<figure className="item__img-container">
					<span className="cart__indicator">{items}</span>
					<img
						className="item__cart-img"
						src={`../assets/moda/${id}.jpg`}
						alt="algo"
					/>
				</figure>
				<div className="item__text">
					<span className="item__name">{name}</span>
					<span className="item__shipping">Talla {sizeSelect}</span>
					<span className="item__shipping">Envío a domicilio</span>
					<span className="item__price">s./ {price.toFixed(2)}</span>
				</div>
			</Link>

			<div className="buttons__add-delete">
				<div className="cart__btn-delete">
					<i className="fas fa-times"></i>
					<span className="btn__delete-text" onClick={handleDeleteItem}>
						Eliminar
					</span>
				</div>

				<div className="cart__btn-add">
					<span className="btn__rest" onClick={handleDecrement}>
						-
					</span>
					<span className="cart__count">{items}</span>
					<span className="btn__add" onClick={handleIncrement}>
						+
					</span>
				</div>
			</div>
		</div>
	);
};
