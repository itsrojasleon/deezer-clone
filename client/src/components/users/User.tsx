import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TrackState
} from '../../contexts/tracks';
import UserDetails from './UserDetails';
import Subtitle from '../Subtitle';

const User = (): JSX.Element => {
  const { state } = useContext<TrackState>(TracksContext);

  return (
    <>
      {state.users.length ? (
        <Subtitle title="Playlists" type="playlists" />
      ) : null}

      <div>
        {state.users.map((user) => (
          <UserDetails key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default User;
