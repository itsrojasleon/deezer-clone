import React from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import {
  StyledPlayer,
  StyledDiv
  // StyledInputRange,
  // StyledElement
} from '../../styles/player/Player';

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  // const inputData = useRangeInput();
  const { audioRef, state, controls } = usePlayer({
    src: TRACK_URL,
    autoPlay: false
  });
  const [currentValue, setCurrentValue] = React.useState(0);

  // const progress = (currentTime / duration) * 100 || 0;

  return (
    <StyledPlayer>
      <audio ref={audioRef} src={TRACK_URL} />
      {/* <button onClick={togglePlay}>{state.isPlaying ? 'Pause' : 'Play'}</button> */}
      {state.isPlaying ? (
        <button onClick={() => controls.pause()}>Pause</button>
      ) : (
        <button onClick={() => controls.play()}>Play</button>
      )}
      <div>
        <label>Duration: </label>
        <input
          type="range"
          min={0}
          max={state.duration}
          step={1}
          onChange={e => {
            controls.timeUpdate(Number(e.target.value));
            setCurrentValue(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <label>Volume:</label>
        <input
          type="range"
          onChange={e => {
            controls.volume(Number(e.target.value));
          }}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
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
