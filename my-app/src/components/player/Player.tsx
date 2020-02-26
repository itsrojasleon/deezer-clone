import React, { useContext } from 'react';
import { Context as PlayerContext } from '../../contexts/player';
import { useAudio } from '../../hooks/useAudio';

const Player = (): JSX.Element => {
  const { state: playerState } = useContext(PlayerContext);
  const [audio, state, controls] = useAudio({
    src: playerState?.track?.preview || '',
    autoPlay: false
  });

  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {state.paused ? (
        <button onClick={controls.play}>Play</button>
      ) : (
        <button onClick={controls.pause}>Pause</button>
      )}
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
};
export default Player;
