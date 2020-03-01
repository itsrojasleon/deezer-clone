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
}

const PlayerControls = ({
  duration,
  time,
  paused,
  volume,
  controls
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
        <div>
          <span>{time}</span>
          <input {...durationInput} />
          <span>{duration}</span>
        </div>
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
