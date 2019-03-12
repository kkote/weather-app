import React from "react";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: this.props.currentTemp,
      error: "error",
      gender: this.props.gender,
      woman: "defaultw",
      man: "default-m",
      img:  "default1"
    };
    this.setImage = this.setImage.bind(this);
  };


  setImage() {
    let currentTemp = this.props.currentTemp;

    function between(currentTemp, min, max) {
      return currentTemp >= min && currentTemp <= max;
    }

    const imagesForWeather = [
    {id:"1", woman: "womansummer", man: "mansummer",img: "summerdefault"},
    {id:"2", woman: "womanspring", man: "manspring", img: "spring-group2"},
    {id:"3", woman: "womanfall", man: "manfall1", img: "spring-group-s1"},
    {id:"4", woman: "winterwoman", man: "manwinter1", img: "falldefault1"},
    {id:"5", woman: "w-winter1s", man: "manwinter2", img: "winter-couplesize1s"}
    ];

    this.setState(
      (currentTemp >= 75) ? (imagesForWeather[0])
      :(between(currentTemp, 60, 75)) ? (imagesForWeather[1])
      :(between(currentTemp, 50, 60)) ? (imagesForWeather[2])
      :(between(currentTemp, 40, 50)) ? (imagesForWeather[3])
      : (imagesForWeather[4])
    );
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTemp !== prevProps.currentTemp) {
      this.setImage();
    }
  }

  render() {

    let woman = this.state.woman;
    let man = this.state.man;

    if (this.props.gender === "female") {
      return (<div className="img-box">
        <img src={require('../Images/female/' + woman + '.jpg')} alt="woman"/>
        <div className="text">
          <h3>Women<span className="text-uppercase"></span>
          </h3>
        </div>
      </div>);
    } else if (this.props.gender === "male") {
      return (<div className="img-box">
        <img src={require('../Images/male/' + man + '.jpg')} alt="man"/>
        <div className="text">
          <h3>Men<span className="text-uppercase"></span>
          </h3>
        </div>
      </div>);
    } else {
      return (<div className="img-box">
        <img src={require('../Images/defaultImg/' + this.state.img + '.jpg')} alt="defaultImg"/>
      </div>);
    }
  }
}


export default Img;
