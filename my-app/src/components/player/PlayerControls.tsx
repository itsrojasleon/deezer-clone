import React from 'react';
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
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
  controls: HTMLMediaControls;
}

const PlayerControls = ({ duration, time, paused, controls }: Props) => {
  const volumeInput = useRangeInput({
    maxValue: 1,
    changeEvent: controls.volume
  });
  const durationInput = useRangeInput({
    maxValue: duration,
    changeEvent: controls.seek,
    time: time
  });

  return (
    <StyledContainer>
      <LeftSideStyled>
        {paused ? (
          <FiPlay onClick={controls.play} />
        ) : (
          <FiPause onClick={controls.pause} />
        )}
      </LeftSideStyled>
      <CenterStyled>
        <input {...durationInput} />
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
