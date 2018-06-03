import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      filter: 'text'
    };
  }

  handleChange(term) {
    console.log(this.props);
    this.setState({term: term});
    this.props.onAnimeSearchTermChange();
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          className="form-control"
          placeholder="Search"
          value={this.state.term}
          onChange={e => this.handleChange(e.target.value)} />
      </div>
    );
  }
}