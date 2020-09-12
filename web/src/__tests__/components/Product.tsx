import React from 'react';
import { render } from '@testing-library/react';

import { CartProvider } from 'hooks/cart';
import { BrowserRouter as Router } from 'react-router-dom';
import Product from '../../components/Products/Product';

describe('<Product />', () => {
  it('should render with no error', () => {
    const product = {
      id: 1,
      sku: 'value',
      path: 'value',
      name: 'value',
      image: 'value',
      price: 1,
      specialPrice: 1,
      quantity: 1,
    };

    const { container } = render(
      <CartProvider>
        <Router>
          <Product
            imageUrl="pants-1.jpg"
            alt=""
            name=""
            price={2}
            item={product}
          />
        </Router>
      </CartProvider>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
