import React from 'react';
import { render } from '@testing-library/react';

import Filters from '../../components/Filters';

describe('<Filters />', () => {
  it('should render with no error', () => {
    const { container } = render(<Filters />);

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
