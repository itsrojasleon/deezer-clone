import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as TracksProvider } from './contexts/tracks';
import { Provider as AlbumsProvider } from './contexts/albums';

ReactDOM.render(
  <TracksProvider>
    <AlbumsProvider>
      <App />
    </AlbumsProvider>
  </TracksProvider>,
  document.getElementById('root')
);
