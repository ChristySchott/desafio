import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../../components/Menu';

describe('<Menu />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <Router>
        <Menu open={false} />
      </Router>,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
