import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from 'hooks/cart';

import Container from './styles';

const CartInfos: React.FC = () => {
  const { totalItensInCart, cartTotal } = useCart();

  return (
    <Container>
      <Link to="/cart">
        <FiShoppingCart size={24} color="#fff" />
        <span>{`${totalItensInCart} itens`}</span>
      </Link>

      <div>
        <span>{cartTotal}</span>
      </div>
    </Container>
  );
};

export default CartInfos;
