import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer, StyledH2 } from '../styles/Subtitle';
import { FiChevronRight } from 'react-icons/fi';
import { hideSubtitle } from '../utils/hide-subtitle';

interface Props {
  title: string;
  type: string;
}

const Subtitle = ({ title, type }: Props) => {
  const { pathname } = useLocation();
  // This is not a hook, it's a helper function
  const isHiding = hideSubtitle(pathname);
  if (!isHiding) {
    return (
      <StyledContainer>
        <Link to={`${pathname}/${type}`}>
          <StyledH2>{title}</StyledH2>
        </Link>
        <FiChevronRight style={{ fontSize: '22px' }} />
      </StyledContainer>
    );
  }
  return (
    <StyledContainer>
      <StyledH2>{title}</StyledH2>
    </StyledContainer>
  );
};
export default Subtitle;
