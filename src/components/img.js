import React from "react";


class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "top",
      pants: "pants",
      outer: "out",
      shoes: "shoes",
      currentTemp: this.props.currentTemp,
      error: "error",
      img: "",
      defaultImg: ""
    };
this.setStyle = this.setStyle.bind(this);

};






  setStyle(){
  let currentTemp = this.props.currentTemp;
  let gender = this.props.gender;
  console.log({currentTemp});
  if (currentTemp >= 75) {
    if (gender === "female"){
      this.setState({
        img: require('../Images/female/w-sum.jpg')
      });
    } else if (gender === "male") {
      this.setState({
        img: require('../Images/male/summer-man-s.jpg')
      });
    } else {
    this.setState({
    img: require('../Images/defaultImg/summer-groups.jpg')
    });
  }
  } else if ((currentTemp >= 60) & (currentTemp < 75)) {
    if (gender === "female"){
      this.setState({
        img: require('../Images/female/w-spring1.jpg')
      });
    } else if (gender === "male") {
      this.setState({
        img: require('../Images/male/ma-spring1.jpg')
      });
    } else {
    this.setState({
        img: require('../Images/defaultImg/spring-group-s.jpg')
    });
  }
  } else if ((currentTemp >= 50) & (currentTemp < 60)) {
    if (gender === "female"){
      this.setState({
        img: require('../Images/female/w-fall1.jpg')
      });
    } else if (gender === "male") {
      this.setState({
        img: require('../Images/male/fall-man1.jpg')
      });
    } else {
    this.setState({
      img: require('../Images/defaultImg/fall-couple-s.jpg')
    });
  }
  } else if ((currentTemp >= 40) & (currentTemp < 50)) {
    if (gender === "female"){
      this.setState({
        img: require('../Images/female/winter-woman.jpg')
      });
    } else if (gender === "male") {
      this.setState({
        img: require('../Images/male/man-winter.jpg')
      });
    } else {
    this.setState({
      img: require('../Images/defaultImg/winter-couplesize.jpg')
    });
  }
  } else {
    if (gender === "female"){
      this.setState({
        img: require('../Images/female/w-winter.jpg')
      });
    } else if (gender === "male") {
      this.setState({
        img: require('../Images/male/m-vwinter1.jpg')
      });
    } else {
    this.setState({
      img: require('../Images/defaultImg/winter-couplesize.jpg')
    });
  }
  console.log("is working");
}
}


componentDidUpdate(prevProps, prevState) {
  if (this.props.currentTemp !== prevProps.currentTemp) {
  this.setStyle();
  }
  console.log("image updated");
  console.log(this.state.img);
  if (this.props.gender !== prevProps.gender) {
  this.setStyle();
  }
}




  render () {
    const {img} = this.state.img;


    return (<div className="img-box">
      <img src={this.state.img} alt="summer"/>
    </div>);


  }
}



export default Img;
