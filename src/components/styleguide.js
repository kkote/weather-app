import React from "react";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

class Style extends React.Component {
	render() {
		return (
			<div className="weather-info">
				{this.props.outer && (
					<div className="weather__key">
						Outerwear:
						<span className="weather__value"> {this.props.outer}</span>
					</div>
				)}

				{this.props.top && (
					<div className="weather__key">
						Top:
						<span className="weather__value"> {this.props.top}</span>
					</div>
				)}

				{this.props.pants && (
					<p className="weather__key">
						Bottoms:
						<span className="weather__value"> {this.props.pants}</span>
					</p>
				)}

				{this.props.shoes && (
					<p className="weather__key">
						Shoes:
						<span className="weather__value"> {this.props.shoes}</span>
					</p>
				)}

				{this.props.error && (
					<p className="weather__error">{this.props.error}</p>
				)}
			</div>
		);
	}
}

export default Style;
