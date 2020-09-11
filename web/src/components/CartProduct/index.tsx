/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import formatValue from 'utils/formatValue';
import { ProductInterface, useCart } from 'hooks/cart';
import {
  Container,
  Image,
  Infos,
  ActionContainer,
  TotalContainer,
} from './styles';

interface CartProductProps {
  productId: number;
  imageUrl: string;
  alt: string;
  name: string;
  offer?: number;
  price: number;
  item: ProductInterface;
  quantity?: number;
  totalPrice?: number;
}

const CartProduct: React.FC<CartProductProps> = ({
  productId,
  alt,
  name,
  offer,
  price,
  item,
  quantity,
}) => {
  const { increment, decrement } = useCart();

  function handleIncrement(id: number): void {
    increment(id);
  }

  function handleDecrement(id: number): void {
    decrement(id);
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

      <TotalContainer>
        <span>{`${quantity}x`}</span>

        <span>{formatValue(price * item.quantity)}</span>
      </TotalContainer>

      <ActionContainer>
        <button type="button" onClick={() => handleIncrement(productId)}>
          <FiPlus color="#E83F5B" size={16} />
        </button>
        <button type="button" onClick={() => handleDecrement(productId)}>
          <FiMinus color="#E83F5B" size={16} />
        </button>
      </ActionContainer>
    </Container>
  );
};

export default CartProduct;
