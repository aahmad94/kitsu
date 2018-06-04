import React from 'react';
import SearchBar from './search_bar';
import List from './list';

import { fetchAnime } from '../../actions/search/anime';

export default class SearchFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  onSearch(term) {
    fetchAnime(term).then( data => this.setState({ items: data.data }));
  }

  render() {
    return (
    <div className="search-feed">
      <SearchBar 
          onSearchTermChange={(term) => this.onSearch(term)} />
      <List items={this.state.items} />
    </div>
    );
  }
}