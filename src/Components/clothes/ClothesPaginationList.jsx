import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pageState, resetPageState } from '../../actions/filter';

export const ClothesPaginationList = ({ pagesTotal }) => {
	const { page } = useSelector((state) => state.filter);

	const dispatch = useDispatch();

	const getBlocksPagination = () => {
		const resultpages = [];
		for (let i = 1; i <= pagesTotal; i++) {
			resultpages.push(
				<span
					key={i}
					onClick={() => {
						localStorage.setItem('pageState', i);
						dispatch(pageState(i));
					}}
					className={`pagination__block ${page === i && 'activate'}`}
				>
					{i}
				</span>
			);
		}
		return resultpages;
	};

	return (
		<div className="list__pagination">
			<div className="list__pagination-container">
				<span
					className="pagination__decrement"
					onClick={() => {
						if (page !== 1) {
							localStorage.setItem('pageState', page - 1);
							dispatch(pageState(page - 1));
						}
					}}
				>
					<i className="fas fa-chevron-left"></i>Anterior
				</span>

				<div className="pagination__container-block">
					{getBlocksPagination()}
				</div>

				<span
					className="pagination__increment"
					onClick={() => {
						if (page < pagesTotal) {
							localStorage.setItem('pageState', page + 1);
							dispatch(pageState(page + 1));
						} else {
							localStorage.setItem('pageState', 1); //resetear el estado de la página al inicial 1
							dispatch(resetPageState());
						}
					}}
				>
					Siguiente<i className="fas fa-chevron-right"></i>
				</span>
			</div>
		</div>
	);
};
