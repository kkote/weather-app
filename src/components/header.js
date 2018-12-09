import React from "react";
import Typography from '@material-ui/core/Typography';

const Header = props => {
  return (<div className="blogheader">

    <Typography component="h2" variant="h4" color="inherit" className="blogheadermain hiddenonmobile">
      Weather Style Guide
    </Typography>

  </div>);
}

export default Header;
