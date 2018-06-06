import React from 'react';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      filter: 'text'
    };
  }

  handleChange(text) {
    this.setState({term: text});
    this.props.onSearchTermChange(text);
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