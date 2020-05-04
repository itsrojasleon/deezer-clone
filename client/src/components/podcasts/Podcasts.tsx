import React, { useContext } from 'react';
import { Context as TracksContext, State } from '../../contexts/tracks';
import PodcastDetails from './PodcastDetails';
import { StyledContainer } from '../../styles/podcasts/Podcasts';

const Podcasts = () => {
  const {
    state: { podcasts, isLoading }
  } = useContext<State>(TracksContext);

  const loading = podcasts.length === 0 && isLoading;

  return (
    <>
      {loading && <div>Loading...</div>}
      <StyledContainer>
        {podcasts.map((podcast, idx) => (
          <PodcastDetails podcast={podcast} key={podcast.id} />
        ))}
      </StyledContainer>
    </>
  );
};

export default Podcasts;
