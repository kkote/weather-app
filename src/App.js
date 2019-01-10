import React from "react";
import Style from "./components/style";
import Search from "./components/search";
import Img from "./components/img";
import Display from "./components/display";
import Header from "./components/header";
import RadioButtonsGroup from "./components/mf-radio.js";
// import Sunset from "./components/sunset.js";
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

let Api_Key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      city: "St. Louis",
      currentTemp: "35",
      currentWeather: "Snowing",
      hiTemp: "37",
      loTemp: "25",
      gender: "",
      isLoaded: false,
      error: undefined
    };
    this.onCityChange = this.onCityChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
  }

  handleDataChange() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&units=imperial&appid=${Api_Key}`).then(res => res.json()).then((result) => {

      this.setState({
        currentTemp: parseInt(result.main.temp, 10),
        isLoaded: true,
        city: result.name,
        data: result,
        currentWeather: (result.weather[0].description),
        hiTemp: parseInt(result.main.temp_max, 10),
        loTemp: parseInt(result.main.temp_min, 10),
        error: ""
      });
      console.log(this.state.data);


    }, (error) => {
      this.setState({error: "Please input search values..."});
    })
  };

  onCityChange(e) {
    e.preventDefault();
    this.setState({city: e.target.city.value});

  };

  onGenderChange(event) {
    this.setState({gender: event.target.value});
    console.log("gender is clicked")

  };

  componentDidMount() {
    this.handleDataChange();
  };


  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.handleDataChange();
    }
  }

  render() {
    const city = this.state.city;
    const temp = this.state.currentTemp;
    const hightemp = this.state.hiTemp;
    const lowtemp = this.state.loTemp;
    const currentWeather = this.state.currentWeather;
    const gender = this.state.gender;


    return (<div className="App">

        <div className="pagetop">

          <Toolbar className="toolbar">

            <div className="headerSearch">
              <Header/>
              <Search handleSubmit={this.onCityChange}

                />
              {/*}<div>{this.state.error}</div>*/}
            </div>
            <hr className="headerdivider"/>

            <Display city={city} currentTemp={temp} currentWeather={currentWeather} hiTemp={hightemp} loTemp={lowtemp}/>
              <hr className="headerdivider"/>
          </Toolbar>
        </div>



      <main className="maindiv">

        <div className="mainFeaturedPost">
          <Grid container className="mainFeaturedPostContainer">
            <Grid item xs={12} md={8} className="mainDisplay">
              <Img gender={gender} currentTemp={temp}/>
            </Grid>

            <Grid item xs={12} md={4} className="mainDisplay styleDisplay">
              <div className="rightDiv">
                {/* }<RadioButtonsGroup onGenderChange={this.onGenderChange} value={this.state.gender}/> */ }
                <Style currentTemp={temp} city={city}/>

              </div>
            </Grid>
          </Grid>
        </div>

        {/* <div className="mainFeaturedPost">
          <Grid container className="mainFeaturedPostContainer">
            <Grid item xs={12} md={5} className="mainDisplay">
              Women Clothing Image
              <Img gender={gender} currentTemp={temp}/>
              See More
            </Grid>
            <Grid item xs={12} md={5} className="mainDisplay">
              <div className="img-box">
                Man Clothing Image

              <Img gender={gender} currentTemp={temp}/>
              </div>
              See More
            </Grid>


          </Grid>
        </div> */ }




      </main>

    </div>);
  }
}

export default App;
