import React from 'react';
import { FeaturedMan } from './FeaturedMan';
import { FeaturedWoman } from './FeaturedWoman';

export const CarouselFeatured = () => {
	return (
		<>
			<FeaturedWoman gender="mujer" />
			<FeaturedMan gender="hombre" />
		</>
	);
};
