import { Header } from "@layouts/Header";
import { Footer } from "@layouts/Footer";
import { Main } from "@layouts/Main";
import { getApi, apiLink } from "./GetApi";
import React from "react";
import { Preloader } from "@components/Preloader";
class App extends React.Component {
  state = {
    api: [],
    apiLink: apiLink,
    loading: true,
  };
  componentDidMount() {
    this.getMovies(this.state.apiLink);
  }

  getMovies = (request) => {
    getApi(request).then((data) =>
      this.setState({ api: data, loading: false })
    );
  };
  render() {
    return (
      <div className="content">
        <Header />
        {this.state.loading ? (
          <Preloader />
        ) : (
          <Main api={this.state.api} getMovies={this.getMovies} />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
