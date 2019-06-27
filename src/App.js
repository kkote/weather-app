import React from "react";
import Style from "./components/clothingText";
import Search from "./components/search";
import Img from "./components/img";
import Display from "./components/display";
import Header from "./components/header";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

let Api_Key = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Chicago",
      currentTemp: "35",
      currentWeather: "Snowing",
      hiTemp: "37",
      loTemp: "25",
      gender: "",
      isLoaded: false,
      error: undefined
    };
    this.onCityChange = this.onCityChange.bind(this);
  }

  handleDataChange() {
    function handleErrors(response) {
      if (!response.ok) {
        console.log("Error!!!!");
        throw Error(response.statusText);
      }
      console.log("okay");
      return response;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        this.state.city
      },us&units=imperial&appid=${Api_Key}`
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            currentTemp: parseInt(result.main.temp, 10),
            isLoaded: true,
            city: result.name,
            currentWeather: result.weather[0].description,
            hiTemp: parseInt(result.main.temp_max, 10),
            loTemp: parseInt(result.main.temp_min, 10),
            error: ""
          });
        },
        error => {
          this.setState({ error: "Please input valid city..." });
        }
      );
  }

  onCityChange(e) {
    e.preventDefault();
    this.setState({ city: e.target.city.value });
  }

  componentDidMount() {
    this.handleDataChange();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.handleDataChange();
    }
  }

  render() {
    const {
      city,
      currentTemp,
      hiTemp,
      loTemp,
      currentWeather,
      gender
    } = this.state;
    const female = "female";
    const male = "male";

    return (
      <div className="App">
        <div className="pagetop">
          <Toolbar className="toolbar">
            <div className="headerSearch">
              <Header />
              <Search
                handleSubmit={this.onCityChange}
                error={this.state.error}
              />
              <Display
                city={city}
                currentTemp={currentTemp}
                currentWeather={currentWeather}
                hiTemp={hiTemp}
                loTemp={loTemp}
              />
            </div>
            <hr className="headerdivider" />
            <Style currentTemp={currentTemp} city={city} />
            <hr className="headerdivider" />
          </Toolbar>
        </div>

        <main className="maindiv">
          <div className="mainFeaturedPost">
            <Grid container className="mainFeaturedPostContainer">
              <Grid item xs={12} md={4} className="mainDisplay">
                <Img gender={gender} currentTemp={currentTemp} />
              </Grid>

              <Grid item xs={12} md={7} className="mainDisplay styleDisplay">
                <div className="rightDiv">
                {/* <Style currentTemp={currentTemp} city={city} /> */}
                <Grid container className="mainFeaturedPostContainer">
                  <Grid item xs={12} md={12} className="mainDisplay">
                    <div className="MFImages">
                      <Img gender={female} currentTemp={currentTemp} />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12} className="mainDisplay">
                    <div className="MFImages">
                      <Img gender={male} currentTemp={currentTemp} />
                    </div>
                  </Grid>
                </Grid>


              </div>
              </Grid>
            </Grid>
          </div>

          {/*
          <div className="mainFeaturedPost ">
            <Grid container className="mainFeaturedPostContainer">
              <Grid item xs={12} md={5} className="mainDisplay">
                <div className="MFImages">
                  <Img gender={female} currentTemp={currentTemp} />
                </div>
              </Grid>
              <Grid item xs={12} md={5} className="mainDisplay">
                <div className="MFImages">
                  <Img gender={male} currentTemp={currentTemp} />
                </div>
              </Grid>
            </Grid>
          </div>
        */}
        </main>

        <div className="footer">
          <div className="row">
            <div className="fullcolumn">
              &copy; Weather Style Guide By K. Kote
              <span className="footerRight">
                <a href="https://github.com/kkote">Github: kkote</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
