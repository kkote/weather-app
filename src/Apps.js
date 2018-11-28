import React from "react";
import Style from "./components/style";
import Search from "./components/search";
import Img from "./components/img";
import Display from "./components/display";
import Header from "./components/header";


let Api_Key = process.env.REACT_APP_API_KEY;


const App = () => {
  return (
<div className="App">
    <div class= "header">
    <Header />

    <Search loadWeather={this.getWeather}/>
    <Search key={event} loadWeather={handleSubmit}/>

    <Display
      city={this.state.city}
      currentTemp={this.state.currentTemp}
      currentWeather={this.state.weather}
      hiTemp={this.state.hiTemp} hiTemp={this.state.loTemp}
       />
    </div>
  <div class="styledisplay">
  <Style
    currentTemp={this.state.currentTemp}
    />
  <Img currentTemp={this.state.currentTemp}/>
  </div>
</div>
  );
}




export default App;












class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.state = {
      data: '',
      city: 'St. Louis',
      currentTemp="",
      currentWeather="",
      hiTemp="",
      hiTemp= "",
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
 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${Api_Key}`)
 .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             currentTemp: parseInt(response.main.temp, 10),
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

    const temperature = this.state.temperature;
    const temp = this.state.currentTemp ;
    const hightemp = this.state.hiTemp ;
    const lowtemp = this.state.loTemp ;
    const currentForecast = this.state.currentWeather ;


    return (
      <div className="App">

      <div className="header">
        <Search
          temperature={temp}
          onCityChange={this.handleDataChange} />

          <Display
            city={this.state.city}
            currentTemp={temp}
            currentWeather={currentForecast}
            hiTemp={hightemp}
            hiTemp={lowtemp}
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

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
