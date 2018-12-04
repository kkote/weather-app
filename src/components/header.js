import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';



const Header = props => {
  return (
    <div>

      <Typography
               component="h2"
               variant="h4"
               color="inherit"
               noWrap
               className="blogheader"
             > Fashion Forecast
          </Typography>

      <Typography
               component="h2"
               variant="h5"
               color="inherit"
               align="center"
               noWrap
               className="blogheader"
             > Weather Style Guide
          </Typography>


  </div>);
}


export default Header;
