import styled from 'styled-components';
import { gray, dark10 } from './colors';

export const StyledSpinner = styled.span`
  position: absolute;
  top: 16px;
  right: 10px;
  font-size: 17px;
  color: ${gray};
  content: '';
  box-sizing: border-box;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid ${gray};
  border-top-color: ${dark10};
  animation: spinner 0.6s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
