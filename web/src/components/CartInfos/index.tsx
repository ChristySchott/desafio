import React, { useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { useCart } from 'hooks/cart';
import formatValue from 'utils/formatValue';
import { useHistory } from 'react-router-dom';

import Container from './styles';

const Cart: React.FC = () => {
  const { products } = useCart();
  const history = useHistory();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubtotal = product.price * product.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

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

export default Cart;
