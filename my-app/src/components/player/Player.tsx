import React, { useContext } from 'react';
import { Context as PlayerContext } from '../../contexts/player';
import { useAudio } from '../../hooks/useAudio';
import PlayerControls from './PlayerControls';
import { StyledPlayer } from '../../styles/player/Player';

const Player = (): JSX.Element => {
  const { state: playerState } = useContext(PlayerContext);
  const [audio, state, controls] = useAudio({
    src: playerState?.track?.preview || '',
    autoPlay: false
  });

  return (
    <StyledPlayer>
      {audio}
      <PlayerControls
        time={state.time}
        duration={state.duration}
        paused={state.paused}
        controls={controls}
      />
    </StyledPlayer>
  );
};
export default Player;
