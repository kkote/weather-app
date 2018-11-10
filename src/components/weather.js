import React from "react";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

class Weather extends React.Component {
	render() {
		return (
			<div className="weather-info">
				{this.props.country && this.props.city && (
					<div className="weather__key">
						In
						<span className="weather__value">
							{" "}
							{this.props.city}, {this.props.country}
						</span>
					</div>
				)}

				{this.props.temperature && (
					<div className="weather__key">
						Its currently
						<span className="weather__value"> {this.props.temperature}</span>° F
					</div>
				)}

				{this.props.description && this.props.icon && (
					<p className="weather__key">
						With
						<span className="weather__value"> {this.props.description}</span>
							<span className="weather__value"> <img src={this.props.icon} /></span>
					</p>
				)}

				{this.props.error && (
					<p className="weather__error">{this.props.error}</p>
				)}
			</div>
		);
	}
}

export default Weather;
