import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as SongsProvider } from './contexts/songs';

ReactDOM.render(
  <SongsProvider>
    <App />
  </SongsProvider>,
  document.getElementById('root')
);
