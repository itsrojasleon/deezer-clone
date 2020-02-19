import styled from 'styled-components';

export const StyledPlayer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 16px;
  background-color: purple;
`;
export const StyledElement = styled.div`
  background: ${(props: { progress: number }) =>
    props.progress &&
    `linear-gradient(to right, rgb(50, 50, 50) ${props.progress}%, white 0)`};
  width: 100%;
  height: 8px;
`;

export const StyledKnob = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  background-color: black;
  border-radius: 50%;
  left: ${(props: { progress: number }) =>
    props.progress && `${props.progress}%`};
`;
