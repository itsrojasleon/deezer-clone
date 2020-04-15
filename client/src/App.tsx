import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Player from './components/player/Player';
const Home = lazy(() => import('./screens/Home'));
const Results = lazy(() => import('./screens/Results'));
const TracksScreen = lazy(() => import('./screens/Tracks'));
const AlbumsScreen = lazy(() => import('./screens/Albums'));
const ArtistsScreen = lazy(() => import('./screens/Artists'));
const PlaylistsScreen = lazy(() => import('./screens/Playlists'));
const UsersScreen = lazy(() => import('./screens/Users'));
const ArtistScreen = lazy(() => import('./screens/Artist'));
const AlbumScreen = lazy(() => import('./screens/Album'));
const PlaylistScreen = lazy(() => import('./screens/Playlist'));
const UserScreen = lazy(() => import('./screens/User'));
const SignupScreen = lazy(() => import('./screens/Signup'));
const ProfileScreen = lazy(() => import('./screens/Profile'));
const FavoriteScreen = lazy(() => import('./screens/Favorite'));

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <StyledContainer>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search/:something" exact component={Results} />
              <Route
                path="/search/:something/tracks"
                exact
                component={TracksScreen}
              />
              <Route
                path="/search/:something/albums"
                exact
                component={AlbumsScreen}
              />
              <Route
                path="/search/:something/artists"
                exact
                component={ArtistsScreen}
              />
              <Route
                path="/search/:something/playlists"
                exact
                component={PlaylistsScreen}
              />
              <Route
                path="/search/:something/users"
                exact
                component={UsersScreen}
              />
              <Route path="/artist/:artistId" exact component={ArtistScreen} />
              <Route path="/album/:albumId" exact component={AlbumScreen} />
              <Route
                path="/playlist/:playlistId"
                exact
                component={UserScreen}
              />
              <Route path="/user/:userId" exact component={PlaylistScreen} />
              <Route path="/signup" component={SignupScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/favorites" component={FavoriteScreen} />
            </Switch>
          </StyledContainer>
          <Player />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
