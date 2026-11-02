import React from 'react';
import { CustomerTestimonials } from './CustomerTestimonials';

export interface ReviewsProps {
  defaultLayout?: 'carousel' | 'grid';
  showPillars?: boolean;
}

export const Reviews: React.FC<ReviewsProps> = (props) => {
  return <CustomerTestimonials {...props} />;
};
