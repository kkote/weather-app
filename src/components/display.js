import React from "react";
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Display = props => {

  return (<Grid item xs={12} md={7} className="displayGrid">
    <Card elevation={0} className="displayCard">
      <CardContent className="CardContent">
        {
          (<div className="toolbarDisplayGroup">
            <span className="location">
              {" "}{props.city}{" "}
            </span>
            <span id="currentTemp" className="">
              {props.currentTemp}
              ° F</span>
            <span className="description">
              {props.currentWeather}
            </span>
          </div>)
        }
        {
          (<div id="hiLoTemp" className="tempRangedisplayGroup hiddenonmobile">
            <span className="temprange numbers">
              High</span>
            <span className="tempoutput numbers">
              {props.hiTemp}
              ° F</span>
            <span className="temprange numbers">
              Low</span>
            <span className="tempoutput numbers">
              {props.loTemp}
              °F</span>
          </div>)
        }
      </CardContent>
    </Card>
  </Grid>);
}

export default Display;
