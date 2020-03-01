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
    transition: 0.2s;
    & > span {
      display: none;
    }
    & > svg {
      display: block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  & > svg {
    display: none;
  }
`;

interface Props {
  image: string;
}

export const Icon = styled.span`
  background-image: url("${(props: Props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  width: 35px;
  height: 35px;
`;
