import React from "react";
import { Grid, Cell } from "react-flexr";
import "react-flexr/styles.css";

class Style extends React.Component {
	render() {
		return (
			<div className="weather-info">
				{this.props.outer && (
					<div className="style-div">

						<span className="style-key styles"> Outerwear:</span>
						<span className="weather__value style-result styles"> {this.props.outer}</span>
					</div>
				)}

				{this.props.top && (
					<div className="style-div">
						<span className="weather__value style-key styles"> Top: </span>
						<span className="weather__value style-result styles"> {this.props.top}</span>
					</div>
				)}

				{this.props.pants && (
					<div className="style-div">
					<span className="weather__value style-key styles"> Bottoms </span>

						<span className="weather__value style-result styles"> {this.props.pants}</span>
					</div>
				)}

				{this.props.shoes && (
					<div className="style-div">
					<span className="weather__value style-key styles"> Shoes </span>

						<span className="weather__value style-result styles"> {this.props.shoes}</span>
					</div>
				)}

				{this.props.error && (
					<div className="weather__error">{this.props.error}</div>
				)}
			</div>
		);
	}
}

export default Style;
