/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';

import Paginator from '../../components/Paginator';

describe('<Paginator />', () => {
  it('should render with no error', () => {
    const { container } = render(<Paginator />);

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
