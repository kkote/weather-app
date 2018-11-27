import React from "react";



class Img extends Component {
  constructor() {
    super();
    this.state = {
      gender: undefined,
      img: require('./Images/winter-couplesize.jpg'),
      tempNum: this.state.temp,
      tempNum: {this.props.currentTemp},
      error: null
    };
  }

  if (tempNum >= 75) {
    this.setState({
      img: require('./Images/summer-groups.jpg'),
    });
  } else if ((tempNum >= 60) & (tempNum < 75)) {
    this.setState({
      img: require('./Images/spring-group-s.jpg'),
    });
  } else if ((tempNum >= 50) & (tempNum < 60)) {
    this.setState({
      img: require('./Images/fall-couple-s.jpg'),
    });
  } else if ((tempNum >= 40) & (tempNum < 50)) {
    this.setState({
      img: require('./Images/winter-couplesize.jpg'),
    });
  } else {
    this.setState({
    img: require('./Images/winter-woman-crop2size.jpg')});
  }
  render() {
    return (<div className="img-box">
      <img src={this.props.img}/>
    </div>);
  }
}


export default Img;
