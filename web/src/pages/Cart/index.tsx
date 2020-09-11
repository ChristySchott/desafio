import React from 'react';

import { useCart } from 'hooks/cart';

import CartProduct from 'components/CartProduct';
import { Container } from './styles';

const Cart: React.FC = () => {
  const { products } = useCart();
  return (
    <Container>
      {products &&
        products.map(product => (
          <CartProduct
            key={product.id}
            productId={product.id}
            imageUrl={product.image}
            alt="Tênis azul da Adidas com cadarços rosas"
            name={product.name}
            price={product.price}
            offer={product.specialPrice}
            item={product}
          />
        ))}
    </Container>
  );
};

export default Cart;
