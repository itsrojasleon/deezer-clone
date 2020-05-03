import React from 'react';
import { Podcast } from '../../types/Podcast';

interface Props {
  podcast: Podcast;
}

const PodcastDetails = ({ podcast }: Props) => {
  return (
    <div>
      <span>{podcast.title}</span>>
    </div>
  );
};

export default PodcastDetails;
