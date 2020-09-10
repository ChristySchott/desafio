import styled from 'styled-components';

export const Container = styled.div`
  width: 180px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Box = styled.section`
  position: relative;
  div {
    margin: 0 !important;
  }
  .css-g1d714-ValueContainer {
    padding: 0;
  }
  .css-2b097c-container {
    span {
      display: none !important;
    }
  }

  .css-1wy0on6 {
    display: none !important;
  }
  .css-1hwfws3 {
    padding: 0 !important;
  }
  .css-yk16xz-control,
  .css-1pahdxg-control,
  .css-1fhf3k1-control {
    min-width: 100%;
    height: 32px !important;
    border-radius: 5px;
    padding: 0 !important;
    padding-left: 10px !important;
    appearance: none;
    border: 1px solid #ddd;
    background: #fff;
    background-repeat: no-repeat;
    background-position: 90% center;
    background-size: auto;
    cursor: pointer;
    flex-wrap: nowrap !important;
    font-family: 'Opens Sans';
    font-size: 1.4rem;
    line-height: 17px;
  }
  .css-1pahdxg-control {
    border-radius: 5px;
    max-height: 32px !important;
    border: 1px solid #ddd;
    box-shadow: none !important;
    min-height: 32px !important;
  }

  .css-1hb7zxy-IndicatorsContainer {
    display: none;
  }
  .css-26l3qy-menu {
    top: 115%;
    font-size: 1.4rem;
    line-height: 157.4%;
    padding: 2px 5px;
    background-color: #fff;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .css-yt9ioa-option {
    height: 32px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    opacity: 1;
  }
  .css-1n7v3ny-option,
  .css-9gakcf-option {
    border-radius: 2px;
    padding: 0 5px;
    height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: 1;
    &:hover {
      background-color: #fff;
    }
  }
  .css-9gakcf-option {
    color: #414252;
  }
  .css-9gakcf-option:hover {
    color: #414252 !important;
  }
  .css-1n7v3ny-option {
    background-color: #fff;
  }
  .css-yk16xz-control {
    min-height: 30px;
    max-height: 32px;
  }
  .css-1laao21--allyText {
    display: none;
  }
`;
