import React from 'react';
import { render } from '@testing-library/react';

import Products from '../../components/Products';

describe('<Products />', () => {
  it('should render with no error', () => {
    const { container } = render(<Products />);

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
