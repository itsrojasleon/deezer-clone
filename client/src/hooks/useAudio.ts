import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

export interface HTMLMediaProps
  extends React.AudioHTMLAttributes<any>,
    React.VideoHTMLAttributes<any> {
  src: string;
}

export interface HTMLMediaState {
  duration: number;
  paused: boolean;
  muted: boolean;
  time: number;
  volume: number;
}

export interface HTMLMediaControls {
  play: () => Promise<void> | void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
  volume: (volume: number) => void;
  seek: (time: number) => void;
}

export const useAudio = (
  elOrProps: HTMLMediaProps | React.ReactElement<HTMLMediaProps>
): [
  React.ReactElement<HTMLMediaProps>,
  HTMLMediaState,
  HTMLMediaControls,
  { current: HTMLAudioElement | null }
] => {
  let element: React.ReactElement<any> | undefined;
  let props: HTMLMediaProps;

  if (React.isValidElement(elOrProps)) {
    element = elOrProps;
    props = element.props;
  } else {
    props = elOrProps as HTMLMediaProps;
  }

  const [state, setState] = useState({
    time: 0,
    duration: 0,
    paused: true,
    muted: false,
    volume: 1
  });
  const ref = useRef<HTMLAudioElement | null>(null);

  const wrapEvent = (userEvent: any, proxyEvent?: any) => {
    return (event: any) => {
      try {
        proxyEvent && proxyEvent(event);
      } finally {
        userEvent && userEvent(event);
      }
    };
  };

  const onPlay = () => setState(prevState => ({ ...prevState, paused: false }));
  const onPause = () => setState(prevState => ({ ...prevState, paused: true }));
  const onVolumeChange = () => {
    const el = ref.current;
    if (!el) return;
    setState(prevState => ({
      ...prevState,
      muted: el.muted,
      volume: el.volume
    }));
  };
  const onDurationChange = () => {
    const el = ref.current;
    if (!el) return;
    const { duration } = el;
    setState(prevState => ({
      ...prevState,
      duration
    }));
  };
  const onTimeUpdate = () => {
    const el = ref.current;
    if (!el) return;
    // This if statement is going to be used if the element is a !input
    if (state.time >= state.duration) return;
    setState(prevState => ({ ...prevState, time: el.currentTime }));
  };
  const onProgress = () => {
    const el = ref.current;
    if (!el) return;
    setState(prevState => ({
      ...prevState
    }));
  };

  if (element) {
    element = React.cloneElement(element, {
      controls: false,
      ...props,
      ref,
      onPlay: wrapEvent(props.onPlay, onPlay),
      onPause: wrapEvent(props.onPause, onPause),
      onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
      onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
      onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
      onProgress: wrapEvent(props.onProgress, onProgress)
    });
  } else {
    element = React.createElement('audio', {
      controls: false,
      ...props,
      ref,
      onPlay: wrapEvent(props.onPlay, onPlay),
      onPause: wrapEvent(props.onPause, onPause),
      onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
      onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
      onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
      onProgress: wrapEvent(props.onProgress, onProgress)
    } as any); // TODO: fix this typing.
  }

  // Some browsers return `Promise` on `.play()` and may throw errors
  // if one tries to execute another `.play()` or `.pause()` while that
  // promise is resolving. So we prevent that with this lock.
  // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
  let lockPlay: boolean = false;

  const controls = {
    play: () => {
      const el = ref.current;
      if (!el) return;

      if (!lockPlay) {
        const promise = el.play();
        const isPromise = typeof promise === 'object';

        if (isPromise) {
          lockPlay = true;
          const resetLock = () => {
            lockPlay = false;
          };
          promise.then(resetLock, resetLock);
        }

        return promise;
      }
      return undefined;
    },
    pause: () => {
      const el = ref.current;
      if (el && !lockPlay) {
        return el.pause();
      }
    },
    seek: (time: number) => {
      const el = ref.current;
      if (!el || !state.duration) {
        return;
      }
      time = Math.min(state.duration, Math.max(0, time));
      el.currentTime = time;
    },
    volume: (volume: number) => {
      const el = ref.current;
      if (!el) return;
      volume = Math.min(1, Math.max(0, volume));
      el.volume = volume;
      setState(prevState => ({ ...prevState, volume }));
    },
    mute: () => {
      const el = ref.current;
      if (!el) return;
      el.muted = true;
    },
    unmute: () => {
      const el = ref.current;
      if (!el) return;
      el.muted = false;
    }
  };

  useEffect(() => {
    const el = ref.current!;

    if (!el) return;

    setState(prevState => ({
      ...prevState,
      volume: el.volume,
      muted: el.muted,
      paused: el.paused
    }));

    // Start media, if autoPlay is requested
    if (props.autoPlay && el.paused) {
      controls.play();
    }
  }, [props.src]);

  return [element, state, controls, ref];
};
