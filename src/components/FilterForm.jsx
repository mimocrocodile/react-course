import React from "react";
import { apiLink } from "@/GetApi";

class FilterForm extends React.Component {
  state = {
    radioValue: ""
  };

  radioChanger = (event) => {
    console.log(event.target.dataset.type)
    this.setState(() => ({radioValue: event.target.dataset.type}), () => this.props.getMovies(apiLink + this.state.radioValue))
  };
  render() {
    return (
      <form>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              data-type=""
              onChange={this.radioChanger}
              checked={this.state.radioValue == ''}
            />
            <span>New movies</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="&release_date.lte=2010"
              onChange={this.radioChanger}
              checked={this.state.radioValue == '&release_date.lte=2010'}
            />
            <span>Movies before 2010</span>
          </label>
        </p>
      </form>
    );
  }
}

export { FilterForm };
