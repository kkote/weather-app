import React from "react";

let Api_Key = process.env.REACT_APP_API_KEY;

const Header = props => {
return(
<div>
  <h1 className="title">
    Fashion Forecast
  </h1>
  <h3 className="subtitle">
  Weather Style Guide
  </h3>
  </div>

);

}

class Weather extends React.Component {
    render() {
        return (
            <div>
            {this.props.temperature}
            </div>

        )
    }
}


class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {

		const city = "St. Louis";
		const country = "us";

		event.preventDefault();
		const api_call = fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`
		).then(response => response.json())
		.then(json => this.setState({ value : json }));
		console.log(api_call);




    console.log('Location: ' + this.state.value);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Location:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



class Apps extends React.Component{


render(){
    return (
        <div>
        <Header />
        <Header />
        <LocationForm loadWeather={this.getWeather} />
        <Weather   temperature={this.props.value} />
        </div>


        );
    }

}

export default Apps;




