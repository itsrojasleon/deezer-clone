import React from 'react';
import { usePlayer } from '../../hooks/usePlayer';
import { useHtmlElement } from '../../hooks/useHtmlElement';
import {
  StyledDiv,
  StyledPoint,
  StyledElement
} from '../../styles/player/Player';

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  const [
    playerRef,
    setIsPlaying,
    isPlaying,
    currentTime,
    duration
  ] = usePlayer();
  const [divRef, width] = useHtmlElement();

  // Current progress
  const progress = (currentTime / duration) * 100;

  return (
    <div>
      <audio ref={playerRef} src={TRACK_URL} />
      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      ) : (
        <button onClick={() => setIsPlaying(true)}>Play</button>
      )}
      <StyledDiv ref={divRef}>
        <StyledElement progress={progress} />
        <StyledPoint></StyledPoint>
      </StyledDiv>
    </div>
  );
};
export default Player;
