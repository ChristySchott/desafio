import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Cart from '../../pages/Cart';

describe('Cart Page', () => {
  it('should render with no error', () => {
    const { container } = render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
