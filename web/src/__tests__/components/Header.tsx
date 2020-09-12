import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
