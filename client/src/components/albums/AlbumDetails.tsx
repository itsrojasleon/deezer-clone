import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../types/Albums';
import TrackDetails from '../tracks/TrackDetails';
import {
  Context as PlayerContext,
  State as PlayerState
} from '../../contexts/player';
import {
  Context as FavoriteContext,
  State as FavoriteState
} from '../../contexts/favorites';
import { isPlural } from '../../utils/isPlural';
import {
  StyledAlbum,
  StyledWrapper,
  StyledInfo,
  StyledAlbumInfo,
  StyledPersonalInfo,
  StyledTitle,
  StyledArtistName
} from '../../styles/albums/AlbumDetails';

interface Props {
  album: Album;
  hideLink?: boolean;
}

const AlbumDetails = ({ album, hideLink }: Props) => {
  const { selectTrack } = useContext<PlayerState>(PlayerContext);
  const { createFavorite } = useContext<FavoriteState>(FavoriteContext);

  return (
    <StyledAlbum>
      {hideLink ? (
        <>
          <StyledWrapper>
            <img src={album.cover_medium} alt={album.title} />
            <StyledInfo>
              <StyledPersonalInfo>
                <h1>{album.title}</h1>
                <span>
                  <img
                    src={album.artist?.picture_medium}
                    alt={album.artist?.name}
                  />
                  <Link to={`/artist/${album.artist?.id}`}>
                    <p>{album.artist?.name}</p>
                  </Link>
                </span>
              </StyledPersonalInfo>
              <StyledAlbumInfo>
                <span>
                  {album.tracks?.data.length} track
                  {isPlural(album.tracks?.data.length)}
                </span>
                <span>{album.duration}</span>
                <span>{album.release_date}</span>
                <span>
                  {album.fans} fan{isPlural(album.fans)}
                </span>
              </StyledAlbumInfo>
            </StyledInfo>
          </StyledWrapper>
          <div style={{ width: '100%' }}>
            {album.tracks?.data.map((track, idx) => (
              <TrackDetails
                key={track.id}
                track={track}
                selectTrack={selectTrack}
                selectFavoriteTrack={createFavorite}
                index={idx + 1}
              />
            ))}
          </div>
        </>
      ) : (
        <Link to={`/album/${album.id}`}>
          <img src={album.cover_medium} alt={album.title} />
          <StyledTitle>{album.title}</StyledTitle>
          <StyledArtistName>By {album.artist.name}</StyledArtistName>
        </Link>
      )}
    </StyledAlbum>
  );
};

export default AlbumDetails;
