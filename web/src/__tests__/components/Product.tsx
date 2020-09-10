import React from 'react';
import { render } from '@testing-library/react';

import Product from '../../components/Products/Product';

describe('<Product />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <Product imageUrl="" alt="" name="" price="" />,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
