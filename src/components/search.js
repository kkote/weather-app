
import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.onCityChange(e.target.value);
  }

  render() {
    const city = this.props.city;
    const scale = this.props.scale;
    return (

      <form onSubmit={this.handleSubmit}>
        <legend>Enter location:</legend>
        <input value={City}
               placeholder="City"/>
             <button>Search</button>
           </form>
    );
  }
}


export default Search;
