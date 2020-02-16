import styled from 'styled-components';

export const StyledSpinner = styled.span`
  position: absolute;
  top: 16px;
  right: 10px;
  font-size: 17px;
  color: #ccc;
  content: '';
  box-sizing: border-box;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: spinner 0.6s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
