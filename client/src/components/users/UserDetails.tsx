import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/User';
import { StyledImage, StyledName } from '../../styles/users/UserDetails';

interface Props {
  user: User;
}

const UserDetails = ({ user }: Props) => {
  return (
    <div>
      <Link to={`/playlist/${user.id}`}>
        <StyledImage src={user.picture_medium} alt={user.name} />
        <StyledName>{user.name}</StyledName>
      </Link>
    </div>
  );
};

export default UserDetails;
