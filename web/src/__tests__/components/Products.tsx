import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Products from '../../components/Products';

describe('<Products />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
