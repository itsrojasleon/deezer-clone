import React from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import { useRangeInput } from '../../hooks/useRangeInput';
import {
  StyledPlayer,
  StyledDiv,
  StyledInputRange,
  StyledElement
} from '../../styles/player/Player';

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  const {
    ref: playerRef,
    setIsPlaying,
    isPlaying,
    currentTime,
    duration,
    setClickedTime
  } = usePlayer();

  const inputData = useRangeInput(currentTime, setClickedTime);

  // Current progress
  const progress = (currentTime / duration) * 100 || 0;

  return (
    <StyledPlayer>
      <audio ref={playerRef} src={TRACK_URL} controls />
      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      ) : (
        <button onClick={() => setIsPlaying(true)}>Play</button>
      )}
      <StyledDiv>
        <StyledElement progress={progress} />
        <StyledInputRange
          type="range"
          max={duration}
          min={0}
          {...inputData}
          step={0.00001}
        />
        <h2>{inputData.value}</h2>
      </StyledDiv>
    </StyledPlayer>
  );
};
export default Player;
