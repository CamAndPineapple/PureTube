import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

render() {
  return (
    <div className="search-bar" id="search-container">
      <i className="fa fa-search"></i>
      <input value={this.state.term} onChange={e => this.onInputChange(e.target.value)} id="search-input"/>
    </div>
  );

}


  onInputChange(term) {
    this.setState({term: term});
    this.props.onSearchTermChange(term);

  }
}

export default SearchBar;
