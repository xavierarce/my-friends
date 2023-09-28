import React, { Component } from "react";
import './SearchBox.css';

class SearchBox extends Component{
  render(){
    return(
      <div className="pa2">
        <input
        className={`search-box tc pa3 ba b--green bg-lightest-blue ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChange}
        />
      </div>
    )}
}



export default SearchBox;