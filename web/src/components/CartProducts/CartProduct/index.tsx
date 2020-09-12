/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

import formatValue from 'utils/formatValue';
import { ProductInterface, useCart } from 'hooks/cart';
import { Container, Image, Infos, ActionContainer } from './styles';

interface CartProductProps {
  productId: number;
  imageUrl: string;
  alt: string;
  name: string;
  price: number;
  item: ProductInterface;
  quantity?: number;
  totalPrice?: number;
}

const CartProduct: React.FC<CartProductProps> = ({
  productId,
  alt,
  name,
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
        <div>
          <span>{`${quantity}x`}</span>

          <span>
            <strong>{formatValue(price * item.quantity)}</strong>
          </span>
        </div>
      </Infos>

      <ActionContainer>
        <button type="button" onClick={() => handleIncrement(productId)}>
          <FiPlus color="#fff" size={16} />
        </button>
        <button type="button" onClick={() => handleDecrement(productId)}>
          <FiMinus color="#fff" size={16} />
        </button>
      </ActionContainer>
    </Container>
  );
};

export default CartProduct;
