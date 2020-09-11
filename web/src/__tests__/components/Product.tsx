import React from 'react';
import { render } from '@testing-library/react';

import { CartProvider } from 'hooks/cart';
import Product from '../../components/Products/Product';

describe('<Product />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <CartProvider>
        <Product imageUrl="" alt="" name="" price={2} />
      </CartProvider>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
