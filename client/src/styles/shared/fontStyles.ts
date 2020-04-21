import { css } from 'styled-components';
import { textSecondary } from '../colors';
import { small, medium, superLarge } from '../sizes';

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

export const subtitle = css``;

export const counterText = css`
  font-size: ${superLarge}px;
  font-weight: 900;
  margin-bottom: 20px;
`;
