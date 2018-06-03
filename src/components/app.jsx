import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchFeed from './search/search_feed';

const App = () => {
  return (
    <div className="app">
      <Route exact path="/" component={SearchFeed} />

    </div>  
  );
};

export default App;