import React from "react";
import Weather from "./components/weather";
import Style from "./components/style";
import {Grid, Cell} from "react-flexr";
import "react-flexr/styles.css";

let Api_Key = process.env.REACT_APP_API_KEY;

const Title = props => {
  return (<div clasName="title-boxes">
    <h1 className="title">Fashion Forecast</h1>
    <div className="subtitle ">Weather Style Guide</div>
  </div>);
};

const Form = props => {
  return (
    <Cell>
      <form onSubmit={props.loadWeather}>
        <Cell className="location-search" size="2/3">
          <input type="text" name="city" placeholder="city"/>
        </Cell>
        {/* <input type="text" name="country" placeholder="country"/> */}
        <Cell className="location-search">
          <button>Search</button>
        </Cell>
      </form>
    </Cell>
  );
};

//        var aImg = "couple";
//
//        var imageName = require('./Images/' + aImg + '.jpg');

class Img extends React.Component {
  render() {
    return (<div className="img-box">
      <img src={this.props.img}/>
    </div>);
  }
}

class App extends React.Component {
  state = {
    temperature: " -  -",
    city: "_______",
    country: "__",
    description: "_____",
    mintemp: " -  -",
    maxtemp: " -   -",
    icon: " ",
    error: undefined,
    outer: " ",
    top: " ",
    pants: " ",
    shoes: " ",
    img: require('./Images/winter-couplesize.jpg')
  };

  getWeather = async e => {
    //		 const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const city = "Chicago";
    const country = "us";

    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`);

    console.log(api_call);
    const response = await api_call.json();
    console.log(response);

    const tempNum = parseInt(response.main.temp, 10);
    const tempNumHi = parseInt(response.main.temp_max, 10);
    const tempNumLo = parseInt(response.main.temp_min, 10);

    console.log(tempNum);

    if (city && country) {
      this.setState({
        temperature: tempNum,
        city: response.name,
        description: response.weather[0].description,
        mintemp: tempNumLo,
        maxtemp: tempNumHi,
        error: ""
      });
    } else {
      this.setState({error: "Please input search"});
    }

    if (tempNum >= 75) {
      this.setState({
        outer: "None",
        top: "T-shirt",
        pants: "Shorts",
        shoes: "Sandals",
        img: require('./Images/summer-groups.jpg'),
        error: ""
      });
    } else if ((tempNum >= 60) & (tempNum < 75)) {
      this.setState({
        outer: "Hoodie or Light Jacket",
        top: "T-shirt",
        pants: "Shorts or Pants",
        shoes: "Shoes ",
        img: require('./Images/spring-group-s.jpg'),
        error: ""
      });
    } else if ((tempNum >= 50) & (tempNum < 60)) {
      this.setState({
        outer: "Jacket/Fleece",
        top: "T-shirt or Long sleeve",
        pants: "Pants",
        shoes: "Shoes",
        img: "",
        img: require('./Images/fall-couple-s.jpg'),
        error: ""
      });
    } else if ((tempNum >= 40) & (tempNum < 50)) {
      this.setState({
        outer: "Jacket/Fleece ",
        top: " Long Sleeve",
        pants: "Pants",
        shoes: "Shoes or Boots",
        img: "",
        img: require('./Images/winter-couplesize.jpg'),
        error: ""

      });
    } else {
      this.setState({outer: "Layers: Hoodie/Jacket/Coat", top: "Long Sleeve", pants: "Thick Pants or Layers", shoes: "Boots", img: require('./Images/winter-woman-crop2size.jpg')});
    }

  };

  render() {
    return (<div>
      <Grid>
        <Cell className="nav-box">
          <Cell className="title-box" palm="hidden" size="1/4">
            <Title/>
          </Cell>
          {/*{<Cell className="search-form">
							<Form loadWeather={this.getWeather} />
						</Cell> }*/
          }
          <Cell className="weather-top" palm="2/3">
            <Cell className="search-form">
              <Form loadWeather={this.getWeather}/>
            </Cell>

            <Cell size="3/5">
              <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} description={this.state.description} maxtemp={this.state.maxtemp} mintemp={this.state.mintemp} error={this.state.error} icon={this.state.icon}/>
            </Cell>
          </Cell>
        </Cell>
      </Grid>

      <div className="wrapper">
        <div className="main">
            <Grid className="display-container">
              <Cell className="style-box" size="1/2">
                <Style top={this.state.top} pants={this.state.pants} outer={this.state.outer} shoes={this.state.shoes} error={this.state.error}/>
              </Cell>
              <Img img={this.state.img}/>

            </Grid>

        </div>
      </div>
    </div>);
  }
}
export default App;
