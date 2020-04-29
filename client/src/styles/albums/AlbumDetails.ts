import styled from 'styled-components';
import { smallBlackText, smallText } from '../shared/fontStyles';

export const StyledAlbum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 0 20px;
  &:last-child {
    margin: 0;
  }
  &:first-child {
    margin: 0;
  }
`;

export const StyledTitle = styled.p`
  ${smallBlackText}
`;

export const StyledArtistName = styled.p`
  ${smallText}
`;
