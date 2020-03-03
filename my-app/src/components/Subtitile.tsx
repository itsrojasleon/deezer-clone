import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledContainer, StyledH2 } from '../styles/Subtitle';
import { FiChevronRight } from 'react-icons/fi';

interface Props {
  title: string;
}

const Subtitle = ({ title }: Props): JSX.Element => {
  const { pathname } = useLocation();
  const type = '/' + title.toLowerCase();
  const url = pathname + type;
  return (
    <StyledContainer>
      <Link to={url}>
        <StyledH2>{title}</StyledH2>
      </Link>
      <FiChevronRight style={{ fontSize: '22px' }} />
    </StyledContainer>
  );
};
export default Subtitle;
