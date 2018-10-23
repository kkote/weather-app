import React from 'react';
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";
require('dotenv').config();
const apikey  = process.env.API_KEY;


    class App extends React.Component {

        getWeather = async () => {
            const api_call = await fetch(`https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`);
            const response = await api_call.json();
            console.log(response);
        }


        render() {
            return (
                <div>
                    <Titles />
                    <Form />
                    <Weather />
                </div>
            )
        }

    }
    export default App;
