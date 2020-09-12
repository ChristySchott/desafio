import React from 'react';
import { render } from '@testing-library/react';

import TagFilter from '../../components/TagFilter';

describe('<TagFilter />', () => {
  it('should render with no error', () => {
    const { container } = render(<TagFilter name="" />);

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
