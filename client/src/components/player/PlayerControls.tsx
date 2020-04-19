import React from 'react';
import { FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import {
  AiOutlineCaretRight,
  AiOutlineStepForward,
  AiOutlineStepBackward
} from 'react-icons/ai';
import { useRangeInput } from '../../hooks/useRangeInput';
import { HTMLMediaControls } from '../../hooks/useAudio';
import {
  StyledContainer,
  LeftSideStyled,
  CenterStyled,
  RightSideStyled
} from '../../styles/player/PlayerControls';

interface Props {
  duration: number;
  time: number;
  paused: boolean;
  volume: number;
  controls: HTMLMediaControls;
  title?: string;
}

const PlayerControls = ({
  duration,
  time,
  paused,
  volume,
  controls,
  title = ''
}: Props) => {
  const volumeInput = useRangeInput({
    maxValue: 1,
    changeEvent: controls.volume,
    timeOrVolume: volume
  });
  const durationInput = useRangeInput({
    maxValue: duration,
    changeEvent: controls.seek,
    timeOrVolume: time
  });

  return (
    <StyledContainer>
      <LeftSideStyled>
        <AiOutlineStepBackward />
        {paused ? (
          <AiOutlineCaretRight onClick={controls.play} />
        ) : (
          <FiPause onClick={controls.pause} />
        )}
        <AiOutlineStepForward />
      </LeftSideStyled>
      <CenterStyled>
        <>
          <div>
            <span>{title}</span>
          </div>
          <div>
            <span>{time.toFixed(2)}</span>
            <input {...durationInput} />
            <span>{duration.toFixed(2)}</span>
          </div>
        </>
      </CenterStyled>
      <RightSideStyled>
        <div>
          <FiVolumeX onClick={controls.mute} />
          <FiVolume2 onClick={controls.unmute} />
        </div>
        <input {...volumeInput} />
      </RightSideStyled>
    </StyledContainer>
  );
};

export default PlayerControls;
