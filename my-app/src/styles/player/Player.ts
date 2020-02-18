import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  height: 16px;
  background-color: purple;
`;
export const StyledElement = styled.div`
  background-color: yellow;
  background: ${(props: { progress: number }) =>
    props.progress &&
    `linear-gradient(to right, rgb(50, 50, 50) ${props.progress}%, white 0)`};
  width: 100%;
  height: 8px;
`;

export const StyledPoint = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: blue;
`;
