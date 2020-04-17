import styled from 'styled-components';
import { secondary, textSecondary } from '../colors';
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

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & > span {
    margin-left: 20px;
  }
  & > img {
    border-radius: 40px;
  }
`;

export const StyledInfo = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const StyledAlbumInfo = styled.div`
  display: flex;
  color: ${textSecondary};
  font-size: 14px;
  & > span {
    margin-right: 20px;
  }
`;

export const StyledPersonalInfo = styled.span`
  display: flex;
  flex-direction: column;
  & > span > img {
    width: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 6px;
  }
  & > span {
    display: flex;
    align-items: center;
  }
  & > a:hover {
    color: ${secondary};
  }
`;

export const StyledTitle = styled.p`
  ${smallBlackText}
`;

export const StyledArtistName = styled.p`
  ${smallText}
`;