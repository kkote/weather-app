import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "",
      pants: "",
      outer: "",
      shoes: "",
      currentTemp: this.props.currentTemp,
      city: this.props.city,
      error: "error"
    };
    this.setClothes = this.setClothes.bind(this);

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTemp !== prevProps.currentTemp) {
      this.setClothes();
    }
  }

  setClothes() {
    let currentTemp = this.props.currentTemp;

    function between(currentTemp, min, max) {
      return currentTemp >= min && currentTemp <= max;
    }

    const clothesForWeather = [
    {outer: "Lightweight Jacket", top: "T-shirt", pants: "Shorts", shoes: "Sandals"},
    {outer: "Light Jacket or Hoodie", top: "T-shirt", pants: "Shorts or Pants", shoes: "Shoes"},
    {outer: "Jacket", top: "T-shirt or Long sleeve", pants: "Pants", shoes: "Shoes"},
    {outer: "Jacket or Fleece", top: "Long Sleeve", pants: "Pants", shoes: "Shoes or Boots"},
    {outer: "Coat, Layers", top: "Long Sleeve", pants: "Thick Pants, Layers", shoes: "Boots"}
    ];

    this.setState(
      (currentTemp >= 75) ? (clothesForWeather[0])
      :(between(currentTemp, 60, 75)) ? (clothesForWeather[1])
      :(between(currentTemp, 50, 60)) ? (clothesForWeather[2])
      :(between(currentTemp, 40, 50)) ? (clothesForWeather[3])
      : (clothesForWeather[4])
    );
  }

  render() {

    const {outer, top, pants, shoes, city} = this.state;

    return (<React.Fragment>

      <List component="nav" subheader={<Hidden xsDown > <ListSubheader >
          <Typography  variant="h6" className="clothingSubheader" disableGutters>
            In <b>{this.props.city}</b>, Today is a Great Day to Wear A...
          </Typography>
        </ListSubheader>
      </Hidden>} className="styleList mfDiv">
          <ListItem >
            <ListItemText secondary={outer} className="style-div"/>
          </ListItem>
          <ListItem >
            <ListItemText secondary={top} className="style-div"/>
          </ListItem>
          <ListItem>
            <ListItemText secondary={pants} className="style-div"/>
          </ListItem>
          <ListItem >
            <ListItemText secondary={shoes} className="style-div"/>
          </ListItem>
      </List>
    </React.Fragment>);
  }
}

export default Style;
