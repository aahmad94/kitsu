import React from 'react';
import SearchBar from './search_bar';
import List from './list';
import { fetchAnime } from '../actions/search/anime';
import CurrentItem from './current_item';

export default class MainFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItemId: null
    };
  }

  handleSearch(term) {
    fetchAnime(term).then( data => this.setState({ items: data.data }));
  }

  handleItemSelect(currentItemId) {
    this.setState({ currentItemId });
  }

  render() {
    if (this.state.currentItemId) {
      const item = this.state.items.filter(el => el.id == this.state.currentItemId)[0];
      return (
        < CurrentItem 
          item={item}
        />
      );
    } else {
      return (
        <div className="search-feed">
          <SearchBar 
              onSearchTermChange={(term) => this.handleSearch(term)} />
          <List 
            items={this.state.items}
            onItemSelect={(currentItemId) => this.handleItemSelect(currentItemId)}/>
        </div>
      );
    }
  }
}