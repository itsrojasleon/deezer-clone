import styled from 'styled-components';
import { gray20 } from '../colors';

export const StyledTrack = styled.div`
  box-shadow: 5px 5px 12px 0px ${gray20};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px;
  margin: 18px 0 0 18px;
  &:hover {
    & > div > img,
    > div > span {
      display: none;
    }
    & > div > svg {
      display: block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  & > div {
    display: flex;
    align-items: center;
  }
  & > div > svg {
    display: none;
  }
  & > div img {
    width: 35px;
    height: 35px;
  }
  & > div > span {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
