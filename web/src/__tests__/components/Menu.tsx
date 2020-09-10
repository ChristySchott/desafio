import React from 'react';
import { render } from '@testing-library/react';

import Menu from '../../components/Menu';

describe('<Menu />', () => {
  it('should render with no error', () => {
    const { container } = render(<Menu open={false} />);

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
