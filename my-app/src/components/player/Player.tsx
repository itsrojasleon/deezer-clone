import React, { useContext } from 'react';
import { Context as PlayerContext } from '../../contexts/player';
import { useAudio } from '../../hooks/useAudio';
import { useRangeInput } from '../../hooks/useRangeInput';
import { FiPlay, FiPause } from 'react-icons/fi';
import { StyledPlayer } from '../../styles/player/Player';

const Player = (): JSX.Element => {
  const { state: playerState } = useContext(PlayerContext);
  const [audio, state, controls] = useAudio({
    src: playerState?.track?.preview || '',
    autoPlay: false
  });
  const volumeInput = useRangeInput(1, controls.volume);

  return (
    <StyledPlayer>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {audio}
      {state.paused ? (
        <FiPlay onClick={controls.play} />
      ) : (
        <FiPause onClick={controls.pause} />
      )}
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      {/* <button onClick={() => controls.volume(0.5)}>Volume: 50%</button> */}
      <input {...volumeInput} />
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </StyledPlayer>
  );
};
export default Player;
