import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainFeed from './main_feed';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={MainFeed} />

    </div>
  );
};

export default App;