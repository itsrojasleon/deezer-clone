import styled from 'styled-components';
import { smallBlackText, smallText } from '../shared/fontStyles';

export const StyledImage = styled.img`
  width: 180px;
  border-radius: 50%;
`;
export const StyledArtist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;

export const StyledName = styled.p`
  ${smallBlackText}
  text-align: center;
`;

export const StyledNB = styled.p`
  ${smallText}
  text-align: center;
`;
