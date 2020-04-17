import { css } from 'styled-components';
import { textSecondary } from '../colors';
import { small, medium } from '../sizes';

export const smallText = css`
  color: ${textSecondary};
  font-size: ${small}px;
`;

export const smallBlackText = css`
  font-size: ${medium}px;
  &:hover {
    text-decoration: underline; 
  }
`;
