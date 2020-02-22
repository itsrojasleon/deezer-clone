import React, { useState } from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import {
  StyledPlayer,
  StyledDiv,
  StyledInputRange,
  StyledElement
} from '../../styles/player/Player';

type InputElement = React.ChangeEvent<HTMLInputElement>;

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  const {
    ref: playerRef,
    setIsPlaying,
    isPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setClickedTime
  } = usePlayer();

  const [time, setTime] = useState(0);
  // console.log(time, currentTime);

  React.useEffect(() => {
    setTime(currentTime);
  }, [currentTime]);

  // Current progress
  const progress = (currentTime / duration) * 100 || 0;

  const onChange = (e: InputElement) => {
    setTime(Number(e.target.value));
    // setCurrentTime(Number(e.target.value));
  };

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
          value={time}
          onChange={onChange}
          step={0.00001}
        />
        <h2>{time}</h2>
      </StyledDiv>
    </StyledPlayer>
  );
};
export default Player;
