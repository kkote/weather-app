import React from "react";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

class Weather extends React.Component {
	render() {
		return (
			<div className="weather-top-display">
				{this.props.country && this.props.city && this.props.temperature && this.props.description &&  (
					<div className="weather__key">
						In
						<span className="weather__value">
							{" "}
							{this.props.city}
							{" "}
						</span>
						Its currently
						<span id="tempDisplay" className="weather__value"> {this.props.temperature} ° F</span>
						With
						<span className="weather__value"> {this.props.description}</span>
					</div>
				)}



				{this.props.maxtemp && this.props.mintemp && (
					<div id="hiLoTemp" className="weather__key  ">

						<span className="weather__value hi numbers"> High</span>

						<span className="weather__value lo numbers"> {this.props.maxtemp} ° F</span>


						<span className="weather__value hi numbers"> Low</span>

						<span className="weather__value lo numbers"> {this.props.mintemp} °F</span>
					</div>
				)}

				{this.props.error && (
					<p className="weather__error">{this.props.error}</p>
				)}
			</div>
		);
	}
}

export default Weather;
