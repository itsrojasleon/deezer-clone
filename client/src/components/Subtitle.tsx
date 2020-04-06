import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer, StyledH2 } from '../styles/Subtitle';
import { FiChevronRight } from 'react-icons/fi';
import { hideSubtitle } from '../utils/hide-subtitle';

interface Props {
  title: string;
  type?: string;
}

const Subtitle = ({ title, type }: Props) => {
  const { pathname } = useLocation();
  const hide = hideSubtitle(pathname);

  return (
    <StyledContainer>
      {hide ? (
        <StyledH2>{title}</StyledH2>
      ) : (
        <Link to={`${pathname}/${type}`}>
          <StyledH2>{title}</StyledH2>
        </Link>
      )}
      <FiChevronRight style={{ fontSize: '22px' }} />
    </StyledContainer>
  );
};
export default Subtitle;
