import React from "react";
import Style from "./components/style";
import Search from "./components/search";
import Img from "./components/img";
import Display from "./components/display";
import Header from "./components/header";

let Api_Key = process.env.REACT_APP_API_KEY;

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.state = {
      data: '',
      city: 'St. Louis',
      currentTemp: "",
      currentWeather: "",
      hiTemp:"",
      loTemp:"",
      isLoaded: false,
      error: null
    };
  }

  handleDataChange(city) {
    this.setState({
      city
    });
  }

  componentDidMount() {
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&units=imperial&appid=${Api_Key}`)
 .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             currentTemp: parseInt(result.main.temp, 10),
             isLoaded: true,
             city: result.name,
             data: result,
             description: result.weather[0].description,
             hiTemp: parseInt(result.main.temp_max, 10),
             loTemp: parseInt(result.main.temp_min, 10)
           });
           console.log(this.state.data);
         },
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
   };



  render() {

    const city = this.state.city;
    const temp = this.state.currentTemp ;
    const hightemp = this.state.hiTemp ;
    const lowtemp = this.state.loTemp ;
    const currentForecast = this.state.currentWeather ;


    return (
      <div className="App">

      <div className="header">
        <Header />
        <Search
          city={city}
          onCityChange={this.onCityChange} />

          <Display
            city={city}
            currentTemp={temp}
            currentWeather={currentForecast}
            hiTemp={hightemp}
            loTemp={lowtemp}
             />
         </div>

             <div class="styledisplay">
             <Style
               currentTemp={temp}
               />
             <Img currentTemp={temp}/>
             </div>

      </div>
    );
  }
}

export default Apps;
