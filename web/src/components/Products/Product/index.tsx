import React from 'react';

import { Container, Image, Infos } from './styles';

interface ProductProps {
  imageUrl: string;
  alt: string;
  name: string;
  offer?: string;
  price: string;
}

const Product: React.FC<ProductProps> = ({
  imageUrl,
  alt,
  name,
  offer,
  price,
}) => {
  return (
    <Container>
      <Image>
        <img src={imageUrl} alt={alt} />
      </Image>

      <Infos>
        <span>{name}</span>
        {!!offer && <span>{offer}</span>}
        <strong>{price}</strong>
      </Infos>
    </Container>
  );
};

export default Product;