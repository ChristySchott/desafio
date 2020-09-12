import styled from 'styled-components';

interface ContainerProps {
  image: string;
}

const Container = styled.li<ContainerProps>`
  width: 90%;
  margin: 0 auto;
  margin-top: 15px;
  height: 200px;
  background-image: url(${props => props.image});
  background-position: center 20%;

  border: 1px solid #ddd;
  border-radius: 3px;

  a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: #fff;
    margin-bottom: 15px;
  }
`;

export default Container;
