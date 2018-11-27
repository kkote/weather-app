import React from "react";
import Style from "./components/style";
import Search from "./components/search";
import Img from "./components/img";
import Display from "./components/display";
import Header from "./components/header";


let Api_Key = process.env.REACT_APP_API_KEY;


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "St. Louis",
      country: "us",
      currentTemp: "",
      weather: "",
      hiTemp: "",
      loTemp: "",
      isLoaded: false,
      click: false,
      data: [],
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
   this.setState({
     data: event.target.value
   });
 }



  handleSubmit(event){}
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
              hiTemp: parseInt(result.main.temp, 10),
              loTemp: parseInt(result.main.temp, 10)
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
    )
  }
}




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
