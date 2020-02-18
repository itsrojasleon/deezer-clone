import styled from 'styled-components';
import { gray } from './colors';

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${gray};
  padding: 0 10px 0 10px;
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
