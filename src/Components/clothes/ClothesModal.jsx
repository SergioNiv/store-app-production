import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

export const ClothesModal = ({ openModal, setOpenModal, content }) => {
	Modal.setAppElement('#root');

	const history = useHistory();
	const { name, sizeSelect, price, id } = content;

	const closeModal = () => {
		setOpenModal(!openModal);
	};

	const handleBtnGocart = () => {
		history.push('/cart');
	};
	return (
		<Modal
			isOpen={openModal}
			onRequestClose={closeModal}
			className="modal"
			overlayClassName="modal-fondo"
			closeTimeoutMS={200}
		>
			{/* Estilos reutilizados de _itemCart.scss */}
			<h5 className="modal__title">Se agregró al carrito</h5>
			<p className="modal__resumen">Resumen de compra:</p>
			<div className="item__cart">
				<div className="container__cart mb-10">
					<figure className="item__img-container">
						<img
							className="item__cart-img"
							src={`../assets/moda/${id}.jpg`}
							alt="algo"
						/>
					</figure>
					<div className="item__text">
						<span className="item__name">{name}</span>
						<span className="item__shipping">Talla {sizeSelect}</span>
						<span className="item__shipping">Envio a domicilio</span>
						<span className="item__price">s./ {price.toFixed(2)}</span>
					</div>
				</div>
			</div>

			<div className="buttons__add-cart">
				<div className="btn__continue" onClick={closeModal}>
					Seguir comprando
				</div>
				<div className="btn__go-cart" onClick={handleBtnGocart}>
					Ir al carrito
				</div>
			</div>
		</Modal>
	);
};
