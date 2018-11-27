
import React from 'react';

let Api_Key = process.env.REACT_APP_API_KEY;



class Search extends React.Component {
  render() {
    return (
      <div>
      <form onSubmit={props.loadWeather(Weather Component)}>
        <div className="location-search" size="2/3">
          <input type="text" name="city" placeholder="city"/>
        </div>
          <button>Search</button>
      </form>
        </div>
    )
  }
}



const Search = props => {
  return (
    <div>
    <form onSubmit={props.loadWeather(Weather Component)}>
      <div className="location-search" size="2/3">
        <input type="text" name="city" placeholder="city"/>
      </div>
        <button>Search</button>
    </form>
      <div>);
}


const Search = props => {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <div className="location-search" size="2/3">
        <input type="text" name="city" placeholder="city"/>
      </div>
        <button>Search</button>
    </form>
      <div>);
}



export default Search;






import React from 'react';

const Form = (props) => {
    return (

        <form onSubmit = {props.loadWeather}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country"/>
            <button>Get Weather</button>
        </form>

    )
}

export default Form;
