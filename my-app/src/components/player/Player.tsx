import React, { useContext } from 'react';
import { usePlayer } from '../../hooks/usePlayer';
// import { useRangeInput } from '../../hooks/useRangeInput';
import { Context as PlayerContext } from '../../contexts/player';
import {
  StyledPlayer,
  StyledDiv
  // StyledInputRange,
  // StyledElement
} from '../../styles/player/Player';

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  const { state, togglePlay } = useContext(PlayerContext);
  console.log(state);
  // const inputData = useRangeInput();
  const {
    ref: playerRef
    // setIsPlaying,
    // isPlaying,
    // currentTime,
    // duration
  } = usePlayer(state.isPlaying);

  // const progress = (currentTime / duration) * 100 || 0;

  return (
    <StyledPlayer>
      <audio ref={playerRef} src={TRACK_URL} />
      <button onClick={togglePlay}>{state.isPlaying ? 'Pause' : 'Play'}</button>
      <StyledDiv>
        {/* <StyledElement
          style={{
            background: `linear-gradient(to right, rgb(50, 50, 50) ${progress}%, white 0)`
          }}
          progress={progress}
        /> */}
        {/* <StyledInputRange
          type="range"
          max={duration}
          min={0}
          {...inputData}
          step={0.5}
        /> */}
        {/* <h2>{inputData.value}</h2> */}
      </StyledDiv>
    </StyledPlayer>
  );
};
export default React.memo(Player);
