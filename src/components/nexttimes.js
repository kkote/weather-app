import React from "react";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
    import Hidden from '@material-ui/core/Hidden';


class Times extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "top",
      pants: "pants",
      outer: "out",
      shoes: "shoes",
      currentTemp: this.props.currentTemp,
      error: "error"
    };
this.setStyle = this.setStyle.bind(this);

};



componentDidUpdate(prevProps, prevState) {
  if (this.props.currentTemp !== prevProps.currentTemp) {
  this.setStyle();
  }
  console.log("style updated");
  console.log(this.props.currentTemp);
  console.log(this.state.top);
}


dtConvertedDate = convert (dt)
dateOnly = dtConvertedDate only date
dateOnly = current date
nextDay = current date plus one
nextDay6,12,6 = nextDay(12-7-12 6:00)
nextDay6Temp = 34;




  setStyle(){

  let currentTemp = this.props.currentTemp;
  if ({currentTemp} >= 75) {
    this.setState({
      outer: "None",
      top: "T-shirt",
      pants: "Shorts",
      shoes: "Sandals"
    });
  } else if ((currentTemp >= 60) & (currentTemp < 75)) {
    this.setState({
      outer: "Hoodie or Light Jacket",
      top: "T-shirt",
      pants: "Shorts or Pants",
      shoes: "Shoes "
    });
  } else if ((currentTemp >= 50) & (currentTemp < 60)) {
    this.setState({
      outer: "Jacket/Fleece",
      top: "T-shirt or Long sleeve",
      pants: "Pants",
      shoes: "Shoes"
    });
  } else if ((currentTemp >= 40) & (currentTemp < 50)) {
    this.setState({
      outer: "Jacket/Fleece ",
      top: " Long Sleeve",
      pants: "Pants",
      shoes: "Shoes or Boots"
    });
  } else {
    this.setState({
    outer: "Layers: Coat",
    top: "Long Sleeve",
    pants: "Thick Pants, Layers",
    shoes: "Boots"});
  }
  console.log("is working");
}




  render() {



    const { outer, top, pants, shoes} = this.state;

    return (
      <React.Fragment>


        <List component="nav"
        subheader={<Hidden smDown><ListSubheader component="div">Style</ListSubheader></Hidden>} className="styleList">

        {(<ListItem   ><Hidden smDown>
          <ListItemText primary="(9pm)"  className="style-div"/></Hidden>
          <ListItemText  secondary="34" className="style-div"/>
          </ListItem>

        )}

        <Divider  />
        {(<ListItem>
          <ListItemText primary="12am"  className="style-div"/>
          <ListItemText secondary="32" className="style-div"/>
          </ListItem>
        )}
        <Divider  />

        {(<ListItem >
          <ListItemText primary="3am"  className="style-div"/>
          <ListItemText secondary="36" className="style-div"/>


          </ListItem>
        )}
      </List>
      </React.Fragment>
    );
  }
}


export default Times;
