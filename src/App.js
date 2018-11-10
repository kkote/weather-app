import React from "react";
import Weather from "./components/weather";
import Style from "./components/styleguide";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

let Api_Key = process.env.REACT_APP_API_KEY;
// const longitude =  "-90.2";
// const latitude = "38.6";

// const weatherUrl = "https://crossorigin.me/https://api.darksky.net/forecast/" + Api_Key + "/" + latitude + "," + longitude ;
// console.log(weatherUrl);

// const weatherUrl = ("api.openweathermap.org/data/2.5/weather?lat="   + latitude + "&lon=" + longitude + "&appid=" + Api_Key) ;
// console.log(weatherUrl);

const Titles = (props) => {
    return (
        <div>
            <h1 className="title-container__title">Weather Wear</h1>
            <p className="title-container__subtitle">Forecast Style Guide.</p>
        </div>
    )
}

const Form = (props) => {
    return (

        <form onSubmit = {props.loadWeather}>
        <input type="text" name="city" placeholder="city" />
        <input type="text" name="country" placeholder="country"/>
            <button>Get Weather</button>
        </form>

    )
}

const Styles = (props) => {
    return (

         <div>
           <p>Afternoon</p>
            <p>Evening</p>
        </div>

    )
}


class App extends React.Component {
	state = {
		temperature: "___",
		city: "_____",
		country: "__",
		description: "___",
		icon: " ",
		error: undefined,

        outer: undefined,
        top: undefined,
		pants: undefined,
		shoes: undefined
	};

	getWeather = async e => {
		// const city = e.target.elements.city.value;
		//
		// const country = e.target.elements.country.value;

		const city = "St. Louis";
		const country = "us";

		e.preventDefault();
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`
		);

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
				error: ""
			});
		} else {
			this.setState({
				error: "Please input search"
			});
		}

    /*const tempNum = parseInt(response.main.temp);*/
    const tempNum = "30";
    console.log(tempNum);

		if (tempNum < 50) {
			this.setState({
			    outer: "Jacket",
			    top: "long sleeve",
				pants: "warm pants",
				shoes: "bootss",

				error: ""
			});

		} else {
			this.setState({
                outer: "Light/none",
                top: "short sleeve",
			    pants: "shorts",
			    shoes: "sandals"

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
                                        <Cell size="1/2">
                                            <Style
                                                top={this.state.top}
                                                pants={this.state.pants}
                                                outer={this.state.outer}
                                                shoes={this.state.shoes}
                                                error={this.state.error}
                                            />
                                            1
                                        </Cell>
                                        <Cell size="1/2">
                                            <Weather
                                                temperature={this.state.temperature}
                                                city={this.state.city}
                                                country={this.state.country}
                                                description={this.state.description}
                                                error={this.state.error}
                                                icon={this.state.icon}
                                            />
                                            2

                                        </Cell>

                                        <Cell size="1/2">

                                        <Styles />


                                            <span> 3  </span>
                                        </Cell>
                                        <Cell size="1/2">

                                            4
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
