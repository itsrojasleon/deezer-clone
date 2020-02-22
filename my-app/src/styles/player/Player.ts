import styled from 'styled-components';

export const StyledPlayer = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 16px;
  background-color: purple;
`;

export const StyledElement = styled.div`
  background: ${(props: { progress: number }) =>
    `linear-gradient(to right, rgb(50, 50, 50) ${props.progress}%, white 0)`};
  width: 100%;
  height: 8px;
`;

export const StyledInputRange = styled.input`
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
`;
