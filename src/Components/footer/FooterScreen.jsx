import React from 'react';
import { useLocation } from 'react-router-dom';

export const FooterScreen = () => {
	const location = useLocation();
	return (
		<>
			<div className="footer">
				<h2 className="footer__subtitle">Síguenos en</h2>
				<div className="footer__sociales">
					<a href="www.algo.com" className="social-container">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="www.algo.com" className="social-container">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="www.algo.com" className="social-container">
						<i className="fab fa-tiktok"></i>
					</a>
				</div>
				<div className="footer__text-contain">
					<i className="fas fa-lock"></i>
					<span className="footer__text-security">Tienda 100% segura</span>
				</div>
				<div className="footer__contain-reserved">
					<div className="footer__reserved">
						Tienda Mayra Quiche Modas S.A Todos los derechos reservados.
					</div>
					<div className="footer__condicion">
						Precios disponibles solo en www.mayraquiche.pe Precios online
						publicados pueden incluir descuento adicional. Precios sujetos a
						variaciones sin previo aviso. Productos sujetos a disponibilidad de
						stock
					</div>
				</div>
			</div>
			<div
				className={`${location.pathname === '/cart' && 'relleno__bottom'}`}
			></div>
		</>
	);
};
