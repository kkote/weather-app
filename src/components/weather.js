import React from "react";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

class Weather extends React.Component {
	render() {
		return (
			<div className="weather-info">
				{this.props.country && this.props.city && this.props.temperature &&  (
					<div className="weather__key">
						In
						<span className="weather__value">
							{" "}
							{this.props.city}
							{" "}
						</span>
						Its currently
						<span id="tempDisplay" className="weather__value"> {this.props.temperature} ° F</span>
					</div>
				)}


				{this.props.description && this.props.icon && (
					<div
						className="weather__key"
						style={{
							paddingTop: "-3rem"
						}}
					>
						With
						<span className="weather__value"> {this.props.description}</span>
						<span className="weather__value">
							{" "}
							{/* {<img src={this.props.icon} />} */}
						</span>
					</div>
				)}
				{this.props.maxtemp && this.props.mintemp && (
					<div className="weather__key">
						High|
						<span className="weather__value"> {this.props.maxtemp} ° F</span>
						{" "}
						Low|
						<span className="weather__value"> {this.props.mintemp} °F</span>
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
