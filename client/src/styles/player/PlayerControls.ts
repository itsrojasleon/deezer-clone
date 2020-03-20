import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 10px;
`;
export const LeftSideStyled = styled.div`
  width: 80%;
`;
export const CenterStyled = styled.div`
  width: 100%;
  & > div {
    display: flex;
  }
  & > div > input {
    width: 100%;
  }
`;
export const RightSideStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  & > div {
    display: flex;
  }
  & > input {
    width: 100%;
  }
`;
