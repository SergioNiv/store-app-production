import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useSelector } from 'react-redux';

export const PaypalBtnScreen = () => {
	const { cartItems, totalPrice } = useSelector((state) => state.cart);

	const paypalOptions = {
		clientId: process.env.REACT_APP_CLIENT_ID,
		intent: 'capture',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
		label: 'paypal',
	};

	const handlePaymentSuccess = (data) => {
		if (data.status === 'COMPLETED') {
			const newOrder = {
				//nombre del cliente, este objeto es para guardar los datos de la persona que hace el pedido
				product: cartItems,
				payment: totalPrice,
			};

			return newOrder;
		}
	};

	return (
		<PayPalButton
			paypalOptions={paypalOptions}
			buttonStyles={buttonStyles}
			amount={totalPrice}
			onPaymentStart={() => console.log('Start Payment')}
			onSuccess={(data) => handlePaymentSuccess(data)}
			onError={(error) => console.log(error)}
			onCancel={(data) => console.log(data)}
			style={buttonStyles}
		/>
	);
};
