import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #c61a28;
  padding: 20px 10px;
  @media (min-width: 768px) {
    padding: 20px 10px 10px;
  }
  li,
  a {
    color: #fff;
  }
  h4 {
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1048px;
  box-sizing: border-box;
  padding: 20px 0;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 0;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 10px;
  }
`;

export const Logo = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin: 0 20px;
  outline: none;
  p {
    font-size: 1.3rem;
    line-height: 1.5;
    text-align: center;
    max-width: 300px;
    color: #fff;
    margin-top: 10px;
  }
  @media (min-width: 1024px) {
    flex: 0.5;
  }
`;

export const Magento = styled.div`
  width: 100%;
  margin-top: 15px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    flex: 1;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    @media (min-width: 768px) {
      align-items: flex-start;
      padding-left: 36.1%;
    }
    @media (min-width: 1024px) {
      padding-left: 40%;
    }
    li {
      font-size: 1.5rem;
    }
  }
`;

export const Connect = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    flex: 1;
  }
  h4 {
    margin-bottom: 15px;
  }
  > div {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    background: #ffffff;
    border-radius: 3px;
    height: 45px;
    width: 220px;
    margin-bottom: 10px;
    > div {
      width: 100%;
      justify-content: flex-end;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #c61a28;
      margin-bottom: 0;
    }
  }
`;

export const ContactSocialMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: block;
    cursor: pointer;
    margin: 0 5px;
    color: #fff;
    outline: none;
  }
`;

export const Copyright = styled.div`
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  margin-top: 16px;
  border-top: 0.5px solid #aaa;
  padding: 10px 5px;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #eee;
  @media (min-width: 768px) {
    margin-top: 10px;
    padding: 5px;
  }
`;
