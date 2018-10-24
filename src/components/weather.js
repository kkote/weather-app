//
// import React from 'react';
// const Weather = (props) => {
//     return(
//         <div>
//             {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
//             {props.temperature && <p>Temperature: {props.temperature}</p>}
//             {props.humidity && <p>Humidity: {props.humidity}</p>}
//             {props.description && <p>Conditions:  {props.description}</p>}
//             {props.error && <p>{props.error}</p>}
//         </div>
//     )
// }
// export default Weather;



import React from 'react';
class Weather extends React.Component{
    render(){
        return(
            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location:
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>
                    </p>
                }

                {
                    this.props.temperature && <p className="weather__key">Temperature:
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Conditions:
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }

            </div>
        )
    }
}

export default Weather;