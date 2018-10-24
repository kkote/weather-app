import React from 'react';
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";
// require('dotenv').config();

let Api_Key = String(process.env.REACT_APP_API_KEY);
const longitude =  "-90.199402";
const latitude = "38.627003";

const weatherUrl = "https://api.darksky.net/forecast/" + Api_Key + "/" + latitude + "," + longitude ;
console.log(weatherUrl);


    class App extends React.Component {

        getWeather = async (e) => {
            e.preventDefault();
            const api_call = await fetch("https://api.darksky.net/forecast/" + Api_Key + "/" + latitude + "," + longitude );
            console.log(api_call);
            const response = await api_call.json();

            console.log(response);
        }


        render() {
            return (
                <div>
                    <Titles />
                    <Form loadWeather = {this.getWeather} />
                    <Weather />
                </div>
            )
        }

    }
    export default App;
