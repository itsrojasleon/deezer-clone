import styled from 'styled-components';
import { gray, gray20, red } from '../colors';

export const StyledTrack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  border-bottom: 1px solid ${gray20};
  &:hover {
    background-color: ${gray20};
  }
`;

export const StyledFirstElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > img {
    width: 35px;
    border-radius: 4px;
    margin-right: 15px;
  }
  & > .play {
    display: none;
  }
  & > .heart {
    color: ${gray};
    margin-right: 15px;
    &:hover {
      color: ${red};
      cursor: pointer;
    }
  }
  & > .heart-filled {
    color: ${red};
    margin-right: 15px;
    font-size: 18px;
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    & > img,
    > span {
      display: none;
    }
    & > .play {
      display: block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 15px;
    }
  }
`;
