
import React from 'react';


class Search extends React.Component {
  render() {
    return (
      <div>
      <form onSubmit={props.loadWeather(Weather Component)}>
        <div className="location-search" size="2/3">
          <input type="text" name="city" placeholder="city"/>



          <input
         value={temperature}
         onChange={this.handleChange} />



        </div>
          <button>Search</button>
      </form>
        </div>
    )
  }
}



export default Search;
