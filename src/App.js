
import React from 'react';
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/titles";


    class App extends React.Component {

        getWeather = async () => {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);
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
