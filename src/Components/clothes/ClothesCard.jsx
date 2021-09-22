import React from 'react';
import { Link } from 'react-router-dom';

export const ClothesCard = ({ id, name, price }) => {
	return (
		<Link
			to={`/details/${id}`}
			className="card animate__animated animate__fadeIn animate__faster-3s"
		>
			<figure className="card__container-img">
				<img
					className="card__img"
					src={`../assets/moda/${id}.jpg`}
					alt={name}
				/>
			</figure>
			<div className="card__text">
				<span className="card__name">{name}</span>
				<span className="card__price">s./ {price.toFixed(2)}</span>
				<span className="card__shipping">Envio a domicilio</span>
			</div>
		</Link>
	);
};
