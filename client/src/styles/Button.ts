import styled from 'styled-components';
import { graySecondary, dark } from './colors';

export const StyledButton = styled.button`
  background-color: ${graySecondary};
  padding: 8px 13px;
  color: ${dark};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background-color: rgb(218, 220, 236);
  }
`;
