import React from 'react';
import './authorimage.scss';

export const size_options = {
  Large: 'large',
  Small: '',
};

export const Authorimg = ({ image, alt, ...args }) => (
  <div className={['author__img', `${size_options[`${args.variant}`]}`].join(' ')}>
    <img src={image} alt={alt} />
  </div>
);

Authorimg.defaultProps = {
  size: 'large',
};
