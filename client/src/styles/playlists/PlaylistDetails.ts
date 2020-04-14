import styled from 'styled-components';
import { textSecondary } from '../colors';
import { small, medium } from '../sizes';

export const StyledImage = styled.img`
  border-radius: 4px;
`;

export const StyledTitle = styled.p`
  font-size: ${medium}px;
`;

export const StyledNB = styled.p`
  color: ${textSecondary};
  font-size: ${small}px;
`;
