import React, { useEffect, useRef } from 'react';

const TRACK_URL =
  'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3';

const Player = (): JSX.Element => {
  const audioEl = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const node = audioEl.current;
    if (node) {
      console.log('Yes baby');
    }
  }, []);

  return (
    <div>
      <audio ref={audioEl} src={TRACK_URL} />
    </div>
  );
};
export default Player;
