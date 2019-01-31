import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="blogsearchpaper">
        <form onSubmit={this.props.handleSubmit}>
          <TextField
            label="Enter city"
            name="city"
            onChange={this.handleChange}
            defaultValue="St. Louis"
          />
          <Button variant="contained" type="submit">
            <i className="material-icons">search</i>
          </Button>
        </form>
        <div>{this.props.error}</div>
      </div>
    );
  }
}

export default Search;
