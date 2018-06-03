import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { fetchAnime } from './actions/search/anime';

window.fetchAnime = fetchAnime;


ReactDOM.render(<Root />, document.querySelector("#root"));