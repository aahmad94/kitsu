import React from 'react';
import SearchBar from './search_bar';
import { fetchAnime } from '../../actions/search/anime';

export default class SearchFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      anime: [],
      manga: []
    };
  }

  animeSearch() {
    fetchAnime().then( data => this.setState({ anime: data.data }));
  }

  render() {
    return (
    <div>
      <SearchBar 
          onAnimeSearchTermChange={() => this.animeSearch()} />
        <ul>
        {
          this.state.anime.map(item => {
            const titleType = Object.keys(item.attributes.titles)[0];
            return (
              <li>
                { item.attributes.titles[titleType] }
              </li>
            );
          })
        }
      </ul>
    </div>
    );
  }
}