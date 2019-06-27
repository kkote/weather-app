import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const Display = props => {
  return (
    <Grid item xs={5} md={5} className="displayGrid">
      <Card elevation={0} className="displayCard CardContents">

          <div className="toolbarDisplayGroup">
            <span className="location"> {props.city} </span>
            <span id="currentTemp">{props.currentTemp}°F</span>
            <span className="description">{props.currentWeather}</span>
          </div>

          <div id="hiLoTemp" className="tempRangedisplayGroup hiddenonmobile">
            <span className="temprange numbers">High</span>
            <span className="tempoutput numbers">{props.hiTemp}°F</span>
            <span className="temprange numbers">Low</span>
            <span className="tempoutput numbers">{props.loTemp}°F</span>
          </div>

      </Card>
    </Grid>
  );
};

export default Display;
