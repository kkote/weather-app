import React from "react";
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Display = props => {

  return (<Grid item="item" xs={12} md={10} className="divAbovedisplayPaper">
    <Card elevation={0} className="blogdisplaypaper">
      <CardContent className="CardContent">
        {
          (<div className="displayGroup">

            <span className="hiddenonmobile">In</span>
            <span className="location">
              {" "}{props.city}{" "}
            </span>

            <span className="hiddenonmobile">Its currently</span>
            <span id="currentTemp" className="">
              {props.currentTemp}
              ° F</span>
            <span className="hiddenonmobile">{" "}With{" "}</span>
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
