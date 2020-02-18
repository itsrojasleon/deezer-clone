import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TracksProvider } from './contexts/tracks';
import { Provider as AlbumsProvider } from './contexts/albums';
import { Provider as PlayerProvider } from './contexts/player';

ReactDOM.render(
  <TracksProvider>
    <AlbumsProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </AlbumsProvider>
  </TracksProvider>,
  document.getElementById('root')
);
