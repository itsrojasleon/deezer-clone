import React, { useContext } from 'react';
import { Context as PlayerContext } from '../../contexts/player';
import { useAudio } from '../../hooks/useAudio';
import PlayerControls from './PlayerControls';
import { StyledPlayer } from '../../styles/player/Player';

const Player = (): JSX.Element => {
  const { state: playerState } = useContext(PlayerContext);
  let play = Boolean(playerState?.track?.preview);
  const [audio, state, controls] = useAudio({
    src: playerState?.track?.preview || '',
    autoPlay: play
  });

  return (
    <StyledPlayer>
      {audio}
      <PlayerControls
        time={state.time}
        duration={state.duration}
        paused={state.paused}
        volume={state.volume}
        controls={controls}
        title={playerState?.track?.title}
      />
    </StyledPlayer>
  );
};
export default Player;
