import styled from 'styled-components';
import { base, darkness, darkness10, gray20, blue } from './colors';

export const StyledProfile = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${gray20};
  box-shadow: 0 2px 4px ${darkness}, 0 4px 12px ${darkness10};
  margin-top: 10px;
  border-radius: 4px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  & > label {
    width: 80%;
    margin-bottom: 5px;
    @media (max-width: 769px) {
      width: 95%;
    }
  }
`;

export const StyledInputContainer = styled.div`
  margin: auto;
  width: 80%;
  @media (max-width: 769px) {
    width: 95%;
  }
  & > input {
    background-color: ${gray20};
    padding: 9px 12px;
    box-shadow: none;
    border: none;
    &:hover {
      box-shadow: none;
    }
  }
  @media (max-width: 769px) {
  }
`;

export const StyledTitle = styled.h2`
  margin: 10px 0 20px 0;
`;

export const StyledButton = styled.button`
  background-color: ${blue};
  color: ${base};
  border: none;
  border-radius: 6px;
  font-size: 15px;
  padding: 8px 10px;
  margin-bottom: 20px;
  width: 80%;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${blue};
    opacity: 0.5;
    color: ${base};
    cursor: not-allowed;
  }
`;
