import React from "react";
import Weather from "./components/weather";
import Style from "./components/styleguide";


let Api_Key = process.env.REACT_APP_API_KEY;

const Header = props => {
  return (
    <div>
    <h1 className="title">
      Fashion Forecast
    </h1>
    <h3 className="subtitle">
      Weather Style Guide
    </h3>
  </div>);
}


class Search extend conponent {
  <div>
  <form onSubmit={props.loadWeather(Weather Component)}>
    <div className="location-search" size="2/3">
      <input type="text" name="city" placeholder="city"/>
    </div>
      <button>Search</button>
  </form>
    <div>
}





 const Display = props => {
   return (
     <div className="weather-display">
       {  (
         <div className="displayGroup">
         <div>
         In
         <span className="location">
           {" "}{this.props.city}{" "}
         </span>
         </div>
           <div>
           Its currently
           <span id="curentTemp" className=""> {this.props.currentTemp} ° F</span>
           With
           <span className="description"> {this.props.currentWeather}
           </span>
           </div>

         </div>
       )}
       { (<div id="hiLoTemp" className="tempRangedisplayGroup">
           <span className="temprange"> High</span>
           <span className="tempoutput">
           {this.props.hiTemp} ° F</span>
           <span className="temprange"> Low</span>
           <span className="tempoutput"> {this.props.loTemp} °F</span>
         </div>
       )}
     </div>
   );
 }



takes temp props
class Style extends Component {
  constructor() {
    super();
    this.state = {
      top: null,
      pants: false,
      outer: false,
      shoes: false,
      tempNum: {this.props.currentTemp},
      error: null
    };
  }

  if (tempNum >= 75) {
    this.setState({
      outer: "None",
      top: "T-shirt",
      pants: "Shorts",
      shoes: "Sandals"
    });
  } else if ((tempNum >= 60) & (tempNum < 75)) {
    this.setState({
      outer: "Hoodie or Light Jacket",
      top: "T-shirt",
      pants: "Shorts or Pants",
      shoes: "Shoes "
    });
  } else if ((tempNum >= 50) & (tempNum < 60)) {
    this.setState({
      outer: "Jacket/Fleece",
      top: "T-shirt or Long sleeve",
      pants: "Pants",
      shoes: "Shoes"
    });
  } else if ((tempNum >= 40) & (tempNum < 50)) {
    this.setState({
      outer: "Jacket/Fleece ",
      top: " Long Sleeve",
      pants: "Pants",
      shoes: "Shoes or Boots"
    });
  } else {
    this.setState({
    outer: "Layers: Hoodie/Jacket/Coat",
    top: "Long Sleeve",
    pants: "Thick Pants or Layers",
    shoes: "Boots"});
  }

  render() {
    return (
      <div className="clothesDisplay">
        {(<div >
            <span className="clothesType"> Outer: </span>
            <span > {this.state.outer}</span>
          </div>
        )}
        {(<div className="style-div">
            <span className="clothesType"> Top: </span>
            <span className="style-result"> {this.props.top}</span>
          </div>
        )}
        {(<div className="style-div">
            <span className="clothesType"> Pants: </span>
            <span className="style-result"> {this.props.pants}</span>
          </div>
        )}
        {(<div className="style-div">
            <span className="clothesType"> Shoes: </span>
            <span className="style-result"> {this.props.shoes}</span>
          </div>
        )}
      </div>
    );
  }
}



class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: undefined,
      img: require('./Images/winter-couplesize.jpg'),
      tempNum: {this.props.currentTemp},
      error: null
    };
  }

  if (tempNum >= 75) {
    this.setState({
      img: require('./Images/summer-groups.jpg'),
    });
  } else if ((tempNum >= 60) & (tempNum < 75)) {
    this.setState({
      img: require('./Images/spring-group-s.jpg'),
    });
  } else if ((tempNum >= 50) & (tempNum < 60)) {
    this.setState({
      img: require('./Images/fall-couple-s.jpg'),
    });
  } else if ((tempNum >= 40) & (tempNum < 50)) {
    this.setState({
      img: require('./Images/winter-couplesize.jpg'),
    });
  } else {
    this.setState({
    img: require('./Images/winter-woman-crop2size.jpg')});
  }
  render() {
    return (<div className="img-box">
      <img src={this.props.img}/>
    </div>);
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





export default App;
