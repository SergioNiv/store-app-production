import React from 'react';
import { useEffect } from 'react';
import { CarouselFeatured } from './CarouselFeatured';
import { CarouselPortada } from './CarouselPortada';

export const HomeScreen = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="animate__animated animate__fadeIn animate__faster-3s">
			<CarouselPortada />
			<CarouselFeatured />
		</div>
	);
};
