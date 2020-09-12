/* eslint-disable react/no-array-index-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useCart } from 'hooks/cart';
import { FiShoppingCart } from 'react-icons/fi';
import { Container, Items, CartState, CartFilled } from './styles';
import CartProduct from './CartProduct';

const CartProducts: React.FC = () => {
  const { products, totalItensInCart, cartTotal } = useCart();

  return (
    <Container>
      <header>
        <h2>Carrinho</h2>
      </header>

      <Items>
        {products &&
          products.map(
            product =>
              product.quantity > 0 && (
                <CartProduct
                  key={product.id}
                  productId={product.id}
                  imageUrl={product.image}
                  alt="Tênis azul da Adidas com cadarços rosas"
                  name={product.name}
                  price={product.price}
                  item={product}
                  quantity={product.quantity}
                />
              ),
          )}
      </Items>

      <CartState>
        <FiShoppingCart size={50} color="#c61a28" />
        {totalItensInCart ? (
          <CartFilled>
            <p>
              Itens: &nbsp;
              {totalItensInCart}
            </p>

            <p>
              Valor total: &nbsp;
              {cartTotal}
            </p>
          </CartFilled>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </CartState>
    </Container>
  );
};

export default CartProducts;
