import styled from 'styled-components';
import { gray10, gray20 } from '../colors';

export const StyledTrack = styled.div`
  border-bottom: 1px solid ${gray10};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  &:hover {
    background-color: ${gray20};
  }
`;

export const StyledImage = styled.img`
  width: 3%;
  border-radius: 8px;
`;
