import React from 'react';
import { usePlayer } from '../../hooks/usePlayer';

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  const [ref, setIsPlaying, isPlaying, currentTime] = usePlayer();

  return (
    <div>
      <audio ref={ref} src={TRACK_URL} />
      {isPlaying ? (
        <button onClick={() => setIsPlaying(false)}>Pause</button>
      ) : (
        <button onClick={() => setIsPlaying(true)}>Play</button>
      )}
      {currentTime && Number(currentTime).toFixed(0)}
    </div>
  );
};
export default Player;
