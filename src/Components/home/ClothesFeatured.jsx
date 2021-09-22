import React from 'react';
import { Link } from 'react-router-dom';

export const ClothesFeatured = ({ id, name, price }) => {
	return (
		<Link to={`/details/${id}`} className="card__featured">
			<figure className="container__featured-img">
				<img
					className="card__featured-img"
					src={`../assets/moda/${id}.jpg`}
					alt={name}
				/>
			</figure>
			<div className="card__featured-text">
				<span className="card__featured-name__800px">
					{name.length > 36 ? name.slice(0, 36) + '...' : name}
				</span>
				<span className="card__featured-name">
					{name.length > 24 ? name.slice(0, 24) + '...' : name}
				</span>
				<span className="card__featured-price">s./ {price.toFixed(2)}</span>
				<span className="card__featured-shipping">Envio a domicilio</span>
			</div>
		</Link>
	);
};
