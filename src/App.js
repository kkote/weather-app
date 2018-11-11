import React from "react";
import Weather from "./components/weather";
import Style from "./components/styleguide";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

let Api_Key = process.env.REACT_APP_API_KEY;
// const longitude =  "-90.2";
// const latitude = "38.6";
// const weatherUrl = ("api.openweathermap.org/data/2.5/weather?lat="   + latitude + "&lon=" + longitude + "&appid=" + Api_Key) ;
// console.log(weatherUrl);

const Titles = (props) => {
    return (
        <div>
            <h1 className="title-container__title">Fashion Forecast</h1>
            <p className="title-container__subtitle">Weather Style Guide</p>
        </div>
    )
}

const Form = (props) => {
    return (
        <form onSubmit = {props.loadWeather}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country"/>
            <button>Get Location</button>
        </form>
    )
}

class App extends React.Component {
	state = {
		temperature: " -  -",
		city: "_____",
		country: "__",
		description: "_____",
		mintemp: " -  -",
		maxtemp: " -  -",
		icon: " ",
		error: undefined,
        outer: " ",
        top: " ",
		pants: " ",
		shoes: " "
	};

	getWeather = async e => {
		// const city = e.target.elements.city.value;
		// const country = e.target.elements.country.value;

		const city = "St. Louis";
		const country = "us";

		e.preventDefault();
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`
		);

		console.log(api_call)
		const response = await api_call.json();
		console.log(response);

         var iconcode = response.weather[0].icon;
         const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

		if (city && country) {
			this.setState({
				temperature: response.main.temp,
				city: response.name,
				country: response.sys.country,
				description: response.weather[0].description,
				icon: iconurl,
				mintemp: response.main.temp_min,
				maxtemp: response.main.temp_max,
				error: ""
			});
		} else {
			this.setState({
				error: "Please input search"
			});
		}

    const tempNum = parseInt(response.main.temp);
    console.log(tempNum);

		if (tempNum >= 75) {
			this.setState({
			    outer: "None",
			    top: "T-shirt",
				pants: "Shorts",
				shoes: "Sandals or Shoes",
				error: ""
			})
		} else if ((tempNum >= 60) & (tempNum < 75)  ) {
		this.setState({
			    outer: "Hoodie or Light Jacket",
			    top: "T-shirt",
				pants: "Shorts or Pants",
				shoes: "Shoes",
				error: ""
			});
		}
			else if ((tempNum >=50) & (tempNum < 60)  ) {
		this.setState({
			    outer: "Jacket/Fleece",
			    top: "T-shirt or LongSleeve",
				pants: "Pants",
				shoes: "Shoes",
				error: ""
			});
		}
			else if ((tempNum >=40 ) & (tempNum < 50 ) ) {
		this.setState({
			    outer: "Jacket/Fleece",
			    top: " LongS leeve",
				pants: "Pants",
				shoes: "Shoes or Boots",
				error: ""
			});


		} else {
			this.setState({
                outer: "Layers: Hoodie/Jacket/Coat",
                top: "Long Sleeve",
			    pants: "Thick Pants or Layered",
			    shoes: "Boots"

			});
		}

	};


	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="main">
                        <div className=" title-container">
                            <Grid>
                                <Cell size="2/3">
                                    <Titles />
                                </Cell>
                                <Cell>
                                    <Form loadWeather={this.getWeather} />

                                </Cell>
                                <Cell className="img-box" size="1/3" />
                                <Cell className="info-box">
                                    <Grid>
                                        <Cell className="style-box" size="1/2">
                                            <Style
                                                top={this.state.top}
                                                pants={this.state.pants}
                                                outer={this.state.outer}
                                                shoes={this.state.shoes}
                                                error={this.state.error}
                                            />

                                        </Cell>
                                        <Cell className="weather-box" size="1/2">
                                            <Weather
                                                temperature={this.state.temperature}
                                                city={this.state.city}
                                                country={this.state.country}
                                                description={this.state.description}
                                                  maxtemp={this.state.maxtemp}
                                                mintemp={this.state.mintemp}
                                                error={this.state.error}
                                                icon={this.state.icon}
                                            />


                                        </Cell>

                                    </Grid>
                                </Cell>
                            </Grid>
                        </div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
