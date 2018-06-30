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
    this.state.currentItemId = null;
  }

  handleItemSelect(currentItemId) {
    this.setState({ currentItemId });
  }

  render() {
    if (this.state.currentItemId) {
      const item = this.state.items.filter(el => el.id == this.state.currentItemId)[0];
      return <div className="item-page">
          <img className="fire-guy" src="https://t0.rbxcdn.com/27dc74636039d97ed988db177ba3adbe" alt="" />
          <SearchBar onSearchTermChange={term => this.handleSearch(term)} />
          <CurrentItem item={item} />
        </div>;
    } else {
      return <div className="search-feed">
          <img className="fire-guy" src="https://t0.rbxcdn.com/27dc74636039d97ed988db177ba3adbe" alt="" />
          <SearchBar onSearchTermChange={term => this.handleSearch(term)} />
          <List items={this.state.items} onItemSelect={currentItemId => this.handleItemSelect(currentItemId)} />
        </div>;
    }
  }
}