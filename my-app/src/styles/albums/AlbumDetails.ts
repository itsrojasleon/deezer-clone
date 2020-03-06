import styled from 'styled-components';

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
  & > img {
    border-radius: 3px;
  }
`;
