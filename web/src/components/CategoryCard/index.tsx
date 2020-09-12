import React from 'react';

import { Link } from 'react-router-dom';
import Container from './styles';

interface CategoryProps {
  image: string;
  name: string;
  path: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ image, name, path }) => {
  return (
    <Container image={image}>
      <Link to={`/categories/${path}`}>
        <h2>{name}</h2>
      </Link>
    </Container>
  );
};

export default CategoryCard;
