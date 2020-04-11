import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TracksProvider } from './contexts/tracks';
import { Provider as PlayerProvider } from './contexts/player';
import { Provider as AuthProvider } from './contexts/auth';
import { Provider as UserProvider } from './contexts/user';
import { Provider as FavoriteProvider } from './contexts/favorites';

ReactDOM.render(
  <TracksProvider>
    <PlayerProvider>
      <AuthProvider>
        <UserProvider>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
        </UserProvider>
      </AuthProvider>
    </PlayerProvider>
  </TracksProvider>,
  document.getElementById('root')
);
