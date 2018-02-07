import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

export default class Search extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  searchPosts(text) {
    this.props.searchPostsFn(text);
  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={(e) => this.setState({text: e.target.value})}/>

          <SearchIcon id="Search__icon" onClick={this.searchPosts(this.state.text)}/>
        </div>
        
      </section>
    )
  }
}