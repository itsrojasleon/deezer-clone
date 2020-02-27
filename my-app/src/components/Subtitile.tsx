import React from 'react';
import { StyledContainer, StyledH2 } from '../styles/Subtitle';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  title: string;
}

const Subtitle = ({ title }: Props): JSX.Element => (
  <StyledContainer>
    <StyledH2>{title}</StyledH2>
    <FiChevronRight style={{ fontSize: '22px' }} />
  </StyledContainer>
);
export default Subtitle;
