/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

import formatValue from 'utils/formatValue';
import { Container, Image, Infos } from './styles';

interface ProductProps {
  imageUrl: string;
  alt: string;
  name: string;
  offer?: number;
  price: number;
}

const Product: React.FC<ProductProps> = ({
  imageUrl,
  alt,
  name,
  offer,
  price,
}) => {
  return (
    <Container>
      <a href="/">
        <Image>
          <img src={require('assets/products/shoes-6.jpg')} alt={alt} />
        </Image>
      </a>

      <Infos>
        <span>{name}</span>
        {!!offer && <span>{formatValue(offer)}</span>}
        <strong>{formatValue(price)}</strong>
      </Infos>

      <button type="button">Comprar</button>
    </Container>
  );
};

export default Product;
