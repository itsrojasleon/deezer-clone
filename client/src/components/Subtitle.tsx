import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer, StyledH2 } from '../styles/Subtitle';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  title: string;
}

const Subtitle = ({ title }: Props) => {
  const { pathname } = useLocation();

  return (
    <StyledContainer>
      <Link to={`${pathname}/${title.toLowerCase()}`}>
        <StyledH2>{title}</StyledH2>
      </Link>
      <FiChevronRight style={{ fontSize: '22px' }} />
    </StyledContainer>
  );
};

export default Subtitle;
