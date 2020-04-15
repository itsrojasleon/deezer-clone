import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/User';

interface Props {
  user: User;
}

const UserDetails = ({ user }: Props) => {
  return (
    <div>
      <Link to={`/playlist/${user.id}`}>
        <img src={user.picture_medium} alt={user.name} />
        <h1>{user.name}</h1>
      </Link>
      <p>{user.id}</p>
    </div>
  );
};

export default UserDetails;
