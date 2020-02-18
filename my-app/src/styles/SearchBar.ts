import styled from 'styled-components';
import { gray, darkness, darkness10 } from './colors';

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 18px auto;
  @media (max-width: 769px) {
    width: 95%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${gray};
  background-color: white;
  padding: 13px 10px;
  border-radius: 5px;
  font-size: 17px;
  text-indent: 10px;
  transition: 0.2s;
  box-shadow: 0 2px 4px ${darkness}, 0 4px 12px ${darkness10};
  &:focus {
    outline: 0;
  }
  &:hover {
    box-shadow: 0 2px 4px ${darkness}, 0 6px 12px ${darkness10};
  }
`;
