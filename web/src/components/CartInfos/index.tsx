import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from 'hooks/cart';
import { useHistory } from 'react-router-dom';

import Container from './styles';

const CartInfos: React.FC = () => {
  const { totalItensInCart, cartTotal } = useCart();
  const history = useHistory();

  return (
    <Container>
      <button type="button" onClick={() => history.push('/cart')}>
        <FiShoppingCart size={24} color="#fff" />
        <span>{`${totalItensInCart} itens`}</span>
      </button>

      <div>
        <span>{cartTotal}</span>
      </div>
    </Container>
  );
};

export default CartInfos;
