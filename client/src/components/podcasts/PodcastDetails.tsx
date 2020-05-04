import React from 'react';
import { Link } from 'react-router-dom';
import { Podcast } from '../../types/Podcast';
import { StyledImage, StyledTitle } from '../../styles/podcasts/PodcastDetails';

interface Props {
  podcast: Podcast;
}

const PodcastDetails = ({ podcast }: Props) => {
  return (
    <div>
      <Link to={`/podcast/${podcast.id}`}>
        <StyledImage src={podcast.picture_medium} alt={podcast.title} />
        <StyledTitle>{podcast.title}</StyledTitle>
      </Link>
    </div>
  );
};

export default PodcastDetails;
