import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from './app';

export default () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};