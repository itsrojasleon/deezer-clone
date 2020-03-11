import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../types/Albums';
import TrackDetails from '../tracks/TrackDetails';
import { Context as PlayerContext, State } from '../../contexts/player';
import {
  StyledAlbum,
  StyledWrapper,
  StyledPersonalInfo
} from '../../styles/albums/AlbumDetails';

interface Props {
  album: Album;
  hideLink?: boolean;
}

const AlbumDetails = ({ album, hideLink }: Props) => {
  const { selectTrack } = useContext<State>(PlayerContext);

  return (
    <StyledAlbum>
      {hideLink ? (
        <>
          <StyledWrapper>
            <img src={album.cover_medium} alt={album.title} />
            <span>
              <h1>{album.title}</h1>
              <StyledPersonalInfo>
                <img
                  src={album.artist?.picture_medium}
                  alt={album.artist?.name}
                />
                <Link to={`/artist/${album.artist?.id}`}>
                  <p>{album.artist?.name}</p>
                </Link>
              </StyledPersonalInfo>
            </span>
          </StyledWrapper>
          {album.tracks?.data.map(track => (
            <TrackDetails
              key={track.id}
              track={track}
              selectTrack={selectTrack}
            />
          ))}
        </>
      ) : (
        <Link to={`/album/${album.id}`}>
          <img src={album.cover_medium} alt={album.title} />
          <p>{album.title}</p>
        </Link>
      )}
    </StyledAlbum>
  );
};
export default AlbumDetails;
