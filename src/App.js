import React from 'react';
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";
// require('dotenv').config();

import Grids from "./components/grid";
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css'

let Api_Key = (process.env.REACT_APP_API_KEY);
// const longitude =  "-90.2";
// const latitude = "38.6";

// const weatherUrl = "https://crossorigin.me/https://api.darksky.net/forecast/" + Api_Key + "/" + latitude + "," + longitude ;
// console.log(weatherUrl);

// const weatherUrl = ("api.openweathermap.org/data/2.5/weather?lat="   + latitude + "&lon=" + longitude + "&appid=" + Api_Key) ;
// console.log(weatherUrl);



    class App extends React.Component {

        state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined
        }

        getWeather = async (e) => {
            // const city = e.target.elements.city.value;
            //
            // const country = e.target.elements.country.value;

            const city = "St. Louis";

            const country = "us";

            e.preventDefault();
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${Api_Key}`);

            console.log(api_call);
            const response = await api_call.json();

            console.log(response);

            if(city && country) {
                this.setState({
                    temperature: response.main.temp,
                    city: response.name,
                    country: response.sys.country,

                    description: response.weather[0].description,
                    error: ""
                })
            } else {
                this.setState({
                    error: "Please input search"
                })
            }
        }


        render() {
            return (

                <div>
                    <div className="wrapper">
                        <div className="main">
                            <div className="container">

                                <div className="row">
                                    <div className=" title-container">
                                        <Grid>

                                <Cell size='2/3'>

                                    <Titles />

                                </Cell>
                                <Cell  >
                                <Form loadWeather={this.getWeather} />

                                </Cell>
                                <Cell className="img-box" size='1/3'>


                                </Cell>
                                 <Cell>
                                  <Grid>
                                <Cell size='1/2'>
                                <Weather
                                          city={this.state.city}
                                            country={this.state.country}
                                            description={this.state.description}
                                            error={this.state.error}
                                            />
                                1
                                </Cell>
                                <Cell size='1/2'>
                                <Weather
                                            temperature={this.state.temperature}
                                            error={this.state.error}
                                            />
                                2
                                </Cell>

                                 <Cell size='1/2'>
                                <Weather
                                          city={this.state.city}
                                            country={this.state.country}
                                            error={this.state.error}
                                            />
                                   <span> 3 </span>
                                </Cell>
                                <Cell size='1/2'>
                                <Weather
                                            temperature={this.state.temperature}
                                            error={this.state.error}
                                            />
                                   4
                                </Cell>

                                 </Grid>

                                </Cell>

                              </Grid>


                                       { /* <Titles />  */}

                                    </div>
                                    {
//                                    <div className="col-xs-6 form-container">
//                                        <Form loadWeather={this.getWeather} />
//                                        <Weather
//                                            temperature={this.state.temperature}
//                                            city={this.state.city}
//                                            country={this.state.country}
//                                            humidity={this.state.humidity}
//                                            description={this.state.description}
//                                            error={this.state.error}
//                                        />
//                                    </div>
//
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
    export default App;
