import Carousel from 'nuka-carousel';
import React from 'react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getClothesByGender } from '../../selectors/getClothesByGender';
import { ClothesFeatured } from './ClothesFeatured';

export const FeaturedWoman = ({ gender }) => {
	const clothes = useMemo(() => getClothesByGender(gender), [gender]);

	const clothesWomanFisrt = clothes.filter(
		(clothes) =>
			clothes.id === '009' || clothes.id === '012' || clothes.id === '005'
	);

	const clothesWomanSecond = clothes.filter(
		(clothes) =>
			clothes.id === '006' || clothes.id === '014' || clothes.id === '001'
	);

	return (
		<>
			<h3 className="carousel__featured-subtitle">
				<i className="fas fa-fire-alt"></i>
				<span className="featured__subtitle">
					Lo más destacado en{' '}
					<Link to="/woman" className="featured__subtitle">
						Moda de Mujer
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
						<i className="fas fa-chevron-left btn__arrow-featured"></i>
					</button>
				)}
				renderCenterRightControls={({ nextSlide }) => (
					<button onClick={nextSlide} className="carousel__btn-featured">
						<i className="fas fa-chevron-right btn__arrow-featured"></i>
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
					{clothesWomanFisrt.map((clothes) => (
						<ClothesFeatured key={clothes.id} {...clothes} />
					))}
				</div>
				<div className="cards__container-featureds">
					{clothesWomanSecond.map((clothes) => (
						<ClothesFeatured key={clothes.id} {...clothes} />
					))}
				</div>
			</Carousel>
		</>
	);
};
