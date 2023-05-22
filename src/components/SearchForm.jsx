import React from "react";
import { searchMovie } from "@/GetApi";
class SearchForm extends React.Component {
  state = {
    search: "",
  };
  startSearch = (e) => {
    e.preventDefault();
    this.props.getMovies(searchMovie + this.state.search);
  };
  saveText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.startSearch}>
        <input
          type="text"
          name="search"
          className="search-input"
          onChange={this.saveText}
          value={this.state.searhText}
        />
        <button>Let's go</button>
      </form>
    );
  }
}

export { SearchForm };
