import React, { useContext } from 'react';
import { Context as TracksContext, State } from '../../contexts/tracks';
import PodcastDetails from './PodcastDetails';

const Podcasts = () => {
  const {
    state: { podcasts, isLoading }
  } = useContext<State>(TracksContext);

  const loading = podcasts.length === 0 && isLoading;

  return (
    <div>
      {loading && <div>Loading...</div>}
      {podcasts.map((podcast, idx) => (
        <PodcastDetails podcast={podcast} key={podcast.id} />
      ))}
    </div>
  );
};

export default Podcasts;
