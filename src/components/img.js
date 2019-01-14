import React from "react";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: this.props.currentTemp,
      error: "error",
      gender: this.props.gender,
      woman: "w-winter1s",
      man: "m-vwinter1s",
      img:  "winter-couplesize1s"
    };
    this.setStyle = this.setStyle.bind(this);

  };


  setStyle() {
    let currentTemp = this.props.currentTemp;
    if (currentTemp >= 75) {
      this.setState({
        woman: "w-sum1s",
         man: "summer-man-s1",
          img: "summerdefault"
        });
    } else if ((currentTemp >= 60) & (currentTemp < 75)) {
      this.setState({
        woman: "w-springs1",
        man: "ma-spring1ss",
        img: "spring-group-s1"
      });
    } else if ((currentTemp >= 50) & (currentTemp < 60)) {
      this.setState({
        woman: "w-fall1s",
         man: "fall-man1s",
         img: "falldefault1"
       });
    } else if ((currentTemp >= 40) & (currentTemp < 50)) {
      this.setState({
        woman: "winter-woman1s",
         man: "man-winter1s",
          img: "winter-couplesize1s"
         });
    } else {
      this.setState({
        woman: "w-winter1s",
        man: "m-vwinter1ss",
        img: "winter-couplesize1s"
      });
    }
  }



  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTemp !== prevProps.currentTemp) {
      this.setStyle();
    }
  }

  render() {

    let woman = this.state.woman;
    let man = this.state.man;


    if(this.props.gender === "female") {
      return (<div className="img-box">
      <img src={require('../Images/female/' + woman + '.jpg')} alt="woman"/>
      </div>);
    }
    else if (this.props.gender === "male") {
      return (<div className="img-box">
      <img src={require('../Images/male/' + man + '.jpg')} alt="man"/>
      </div>);
    }
     else  {
      return (<div className="img-box">
      <img src={require('../Images/defaultImg/' + this.state.img + '.jpg')} alt="defaultImg"/>
      </div>);
    }

  }
}




export default Img;
