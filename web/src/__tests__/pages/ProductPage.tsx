import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Product from '../../pages/Product';

describe('Product Page', () => {
  it('should render with no error', () => {
    const { container } = render(
      <BrowserRouter>
        <Product />
      </BrowserRouter>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
