import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInputContainer = styled.div`
  width: 80%;
  @media (max-width: 769px) {
  }
`;

export const StyledTitle = styled.h2`
  margin: 10px 0 20px 0;
`;
