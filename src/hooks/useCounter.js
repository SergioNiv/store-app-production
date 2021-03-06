import { useState } from 'react';

export const useCounter = (initialState = 1) => {
	const [counter, setCounter] = useState(initialState); // 10

	const reset = () => {
		setCounter(initialState);
	};

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		counter > 1 && setCounter(counter - 1);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
