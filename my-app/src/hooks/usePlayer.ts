import { useEffect, useState, useRef } from 'react';

export interface PlayerState {
  duration: number;
  currentTime: number;
  volume: number;
  isPlaying: boolean;
  isMuted: boolean;
}

export interface Controls {
  play: () => void;
  pause: () => void;
}

interface Data {
  src: string;
  autoPlay: boolean;
}

export const usePlayer = ({ src, autoPlay }: Data) => {
  const [state, setState] = useState<PlayerState>({
    duration: 0,
    currentTime: 0,
    volume: 1,
    isPlaying: false,
    isMuted: false
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const controls = {
    play: () => {
      const node = audioRef.current;
      if (!node) return;
      setState(prevState => ({ ...prevState, isPlaying: true }));
      node.play();
    },
    pause: () => {
      const node = audioRef.current;
      if (!node) return;
      setState(prevState => ({ ...prevState, isPlaying: false }));
      node.pause();
    },
    volume: (volume: number) => {
      const node = audioRef.current;
      if (!node) return;
      let currentVolume = Math.min(1, Math.max(0, volume));
      setState(prevState => ({ ...prevState, volume: currentVolume }));
      node.volume = currentVolume;
    },
    timeUpdate: (time: number) => {
      const node = audioRef.current;
      if (!node) return;
      const currentTime = Math.min(state.duration, Math.max(0, time));
      setState(prevState => ({ ...prevState, currentTime }));
      node.currentTime = currentTime;
    }
  };

  useEffect(() => {
    const node = audioRef.current;
    if (node) {
      const load = () => {
        setState(prevState => ({ ...prevState, duration: node.duration }));
      };
      node.addEventListener('loadeddata', load);

      // Start audio, if autoPlay is requested
      if (autoPlay) {
        controls.play();
      }
      return () => {
        node.removeEventListener('loadeddata', load);
      };
    }
  }, [src]);

  return { audioRef, state, controls };
};
