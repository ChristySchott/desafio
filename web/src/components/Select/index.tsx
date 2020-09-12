/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SelectInput from 'react-select';

import { Container, Box } from './styles';

interface SelectProps {
  placeholder?: string;
  name: string;
  value: any;
  onChange?: any;
  options: any;
  getOptionValue?: any;
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  name,
  value,
  onChange,
  options,
  getOptionValue,
}) => {
  return (
    <Container>
      <Box>
        <SelectInput
          placeholder={placeholder}
          options={options}
          name={name}
          value={value}
          onChange={onChange}
          isSearchable={false}
          getOptionValue={getOptionValue}
        />
      </Box>
    </Container>
  );
};
export default Select;
