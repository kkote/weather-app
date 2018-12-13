import React from "react";
import image from "../Images/defaultImg/winter-couplesize1s.jpg";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: this.props.currentTemp,
      error: "error",
      gender: this.props.gender,
      woman: "../Images/female/w-winter1s.jpg",
      man: "../Images/male/m-vwinter1s.jpg",
      img:  "summerdefault"
    };
    this.setStyle = this.setStyle.bind(this);

  };


  setStyle() {
    let currentTemp = 20;
    if (currentTemp >= 75) {
      this.setState({
        woman: "../Images/female/w-sum1s.jpg",
         man: "../Images/male/summer-man-s1.jpg",
          img: "../Images/defaultImg/summerdefault.jpg"
        });
    } else if ((currentTemp >= 60) & (currentTemp < 75)) {
      this.setState({
        woman: "../Images/female/w-springs1.jpg",
        man: "../Images/male/ma-spring1ss.jpg",
        img: "../Images/defaultImg/spring-group-s1.jpg"
      });
    } else if ((currentTemp >= 50) & (currentTemp < 60)) {
      this.setState({
        woman: "../Images/female/w-fall1s.jpg",
         man: "../Images/male/fall-man1s.jpg",
         img: "../Images/defaultImg/falldefault1.jpg"
       });
    } else if ((currentTemp >= 40) & (currentTemp < 50)) {
      this.setState({
        woman: "../Images/female/winter-woman1s.jpg",
         man: "../Images/male/man-winter1s.jpg",
          img: "../Images/defaultImg/winter-couplesize1s.jpg"
         });
    } else {
      this.setState({
        woman: "../Images/male/m-vwinter1s.jpg",
        man: "../Images/male/m-vwinter1s.jpg",
        img: require({image})
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
      <img src={(woman)} alt="woman"/>
      </div>);
    }
    else if (this.props.gender === "male") {
      return (<div className="img-box">
      <img src={require(man)} alt="man"/>
      </div>);
    }
     else  {
      return (<div className="img-box">
      <img src={require('../Images/defaultImg/' + this.state.img + '.jpg')}alt="defaultImg"/>
      </div>);
    }

  }
}




export default Img;
