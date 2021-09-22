import React from 'react';
import Modal from 'react-modal';
import { PaypalBtnScreen } from './PaypalBtnScreen ';

export const ShoppingModal = ({ openModal, setIsOpen }) => {
	Modal.setAppElement('#root');

	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<Modal
			isOpen={openModal}
			onRequestClose={closeModal}
			className="modal"
			overlayClassName="modal-fondo"
			closeTimeoutMS={200}
		>
			<div className="modal-Paypal">
				<PaypalBtnScreen />
			</div>
		</Modal>
	);
};
