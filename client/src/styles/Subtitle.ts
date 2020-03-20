import styled from 'styled-components';
import { secondary } from './colors';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
  & > a {
    text-decoration: none;
    color: black;
  }
  & > a:hover {
    color: ${secondary};
  }
`;
export const StyledH2 = styled.h2`
  font-size: 22px;
`;
