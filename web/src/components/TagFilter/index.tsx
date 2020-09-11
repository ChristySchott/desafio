import React from 'react';

import { FiX } from 'react-icons/fi';

import { Container, Content } from './styles';

interface TagFilterProps {
  name: string;
  onRemove?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ name, onRemove }) => (
  <Container>
    <Content>
      <span>{name}</span>
      <button type="button" onClick={onRemove}>
        <FiX size={18} />
      </button>
    </Content>
  </Container>
);

export default TagFilter;
