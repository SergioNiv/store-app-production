import Carousel from 'nuka-carousel';
import React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getClothesByGender } from '../../selectors/getClothesByGender';
import { ClothesFeatured } from './ClothesFeatured';

export const FeaturedMan = ({ gender }) => {
	const clothes = useMemo(() => getClothesByGender(gender), [gender]);

	const clothesManFisrt = clothes.filter(
		(clothes) =>
			clothes.id === '019' || clothes.id === '017' || clothes.id === '025'
	);

	const clothesManSecond = clothes.filter(
		(clothes) =>
			clothes.id === '023' || clothes.id === '018' || clothes.id === '022'
	);

	return (
		<>
			<h3 className="carousel__featured-subtitle" style={{ marginTop: '50px' }}>
				<i className="fas fa-fire-alt"></i>
				<span className="featured__subtitle">
					Lo más destacado en{' '}
					<Link to="/man" className="featured__subtitle">
						Moda de Hombre
					</Link>
				</span>
			</h3>
			<Carousel
				wrapAround={true}
				autoplay={true}
				autoplayInterval={5000}
				//Text superior
				/* renderTopCenterControls={({ currentSlide }) => (
				<div>Slide: {currentSlide}</div>
			)} */
				renderCenterLeftControls={({ previousSlide }) => (
					<button onClick={previousSlide} className="carousel__btn-featured">
						<i className="fas fa-chevron-left"></i>
					</button>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<button onClick={nextSlide} className="carousel__btn-featured">
						<i className="fas fa-chevron-right"></i>
					</button>
				)}
				defaultControlsConfig={{
					nextButtonText: 'Custom Next',
					prevButtonText: 'Custom Prev',
					pagingDotsStyle: {
						fill: '#f93449',
						padding: '8px',
						position: 'relative',
						bottom: '-40px',
					},
				}}
				className="carousel__featured"
			>
				<div className="cards__container-featureds">
					{clothesManFisrt.map((clothes) => (
						<ClothesFeatured key={clothes.id} {...clothes} />
					))}
				</div>
				<div className="cards__container-featureds">
					{clothesManSecond.map((clothes) => (
						<ClothesFeatured key={clothes.id} {...clothes} />
					))}
				</div>
			</Carousel>
		</>
	);
};
