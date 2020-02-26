import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftSideStyled = styled.div`
  width: 80%;
`;
export const CenterStyled = styled.div`
  width: 100%;
`;
export const RightSideStyled = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  & > div {
    display: flex;
  }
  & > input {
    width: 100%;
  }
`;
