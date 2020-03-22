import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TracksProvider } from './contexts/tracks';
import { Provider as PlayerProvider } from './contexts/player';
import { Provider as AuthProvider } from './contexts/auth';

ReactDOM.render(
  <TracksProvider>
    <PlayerProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PlayerProvider>
  </TracksProvider>,
  document.getElementById('root')
);
