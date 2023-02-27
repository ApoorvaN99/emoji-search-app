import React from 'react';
import './SearchInput.css';

export default class SearchInput extends React.Component {
  handleChange = (e) => {
    this.props.textChange(e);
  };
  render() {
    return (
      <div className="component-search-input">
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}
