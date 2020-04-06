import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TracksProvider } from './contexts/tracks';
import { Provider as PlayerProvider } from './contexts/player';
import { Provider as AuthProvider } from './contexts/auth';
import { Provider as UserProvider } from './contexts/user';

ReactDOM.render(
  <TracksProvider>
    <PlayerProvider>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </PlayerProvider>
  </TracksProvider>,
  document.getElementById('root')
);
