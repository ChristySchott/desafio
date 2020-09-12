/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

import formatValue from 'utils/formatValue';
import { ProductInterface, useCart } from 'hooks/cart';
import { Container, Image, Infos } from './styles';

interface ProductProps {
  imageUrl: string;
  alt: string;
  name: string;
  offer?: number;
  price: number;
  item: ProductInterface;
}

const Product: React.FC<ProductProps> = ({ alt, name, offer, price, item }) => {
  const { addToCart } = useCart();

  function handleAddToCart(product: ProductInterface): void {
    addToCart(product);
  }

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

      <button type="button" onClick={() => handleAddToCart(item)}>
        Comprar
      </button>
    </Container>
  );
};

export default Product;
