/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';

import Burger from '../../components/Burger';

describe('<Burger />', () => {
  it('should render with no error', () => {
    const { container } = render(
      <Burger
        open
        setOpen={() => {
          console.log('Teste');
        }}
      />,
    );

    expect(container).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
