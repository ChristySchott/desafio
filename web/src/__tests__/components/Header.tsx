import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../components/Header';

describe('<Header />', () => {
  it('should render with no error', () => {
    const { container } = render(<Header />);

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
