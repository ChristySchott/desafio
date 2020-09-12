import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Filters from '../../components/Filters';

describe('<Filters />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <Router>
        <Filters />
      </Router>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
