import styled from 'styled-components';
import { gray10, graySecondary, dark } from './colors';

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${gray10};
  padding: 0 10px 0 10px;
  margin-bottom: 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLeftSide = styled.div`
  width: 50%;
`;

export const StyledRightSide = styled.div`
  width: 20%;
  text-align: right;
`;

export const StyledIcon = styled.span`
  width: 50px;
  background-color: ${graySecondary};
  padding: 10px;
  border-radius: 50%;
  color: ${dark};
  margin-left: 20px;
`;
