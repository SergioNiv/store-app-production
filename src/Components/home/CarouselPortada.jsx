import React from 'react';
import Carousel from 'nuka-carousel';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPageState } from '../../actions/filter';

export const CarouselPortada = () => {
	const history = useHistory();

	const dispatch = useDispatch();
	const handleClickFeatured = () => {
		history.push(`/search/disney`);
		dispatch(resetPageState());
	};

	const handleClickWoman = () => {
		history.push('/woman');
	};
	const handleClickMan = () => {
		history.push('/man');
	};
	return (
		<Carousel
			autoplay={true}
			wrapAround={true}
			autoplayInterval={4000}
			//Text superior
			/* renderTopCenterControls={({ currentSlide }) => (
				<div>Slide: {currentSlide}</div>
			)} */
			renderCenterLeftControls={({ previousSlide }) => (
				<button onClick={previousSlide} className="carousel__btn">
					<i className="fas fa-chevron-left btn-arrow"></i>
				</button>
			)}
			renderCenterRightControls={({ nextSlide }) => (
				<button onClick={nextSlide} className="carousel__btn">
					<i className="fas fa-chevron-right btn-arrow"></i>
				</button>
			)}
			defaultControlsConfig={{
				nextButtonText: 'Custom Next',
				prevButtonText: 'Custom Prev',
				pagingDotsStyle: {
					fill: '#f93449',
					padding: '8px',
				},
			}}
			className="carousel"
		>
			<figure className="carousel__container-img" onClick={handleClickFeatured}>
				<img
					src="../assets/portada/disney.gif"
					alt="disney-portada"
					className="carousel__img"
				/>
			</figure>
			<figure className="carousel__container-img" onClick={handleClickWoman}>
				<img
					src="../assets/portada/bannerClothes.png"
					alt="clothes-portada"
					className="carousel__img"
				/>
			</figure>
			<figure className="carousel__container-img" onClick={handleClickMan}>
				<img
					src="../assets/portada/bannerMan.png"
					alt="shop-portada"
					className="carousel__img"
				/>
			</figure>
		</Carousel>
	);
};
