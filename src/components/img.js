import React from "react";



class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: "",
      img: require('../Images/default/winter-couplesize.jpg'),
      pickedGender: "default",
      male: "",
      female:"",
      default:"",
      error: null
    };
    this.setImage = this.setImage.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentTemp !== prevProps.current) {
    this.setImage();
    console.log("temperature updated");
    }

    if (this.props.gender !== prevProps.gender) {
    this.setGender();
    console.log("gender updated");
    }
  }

setGender() {
  let gender = this.props.gender;

  if {pickedGender} === "male" {
    this.setState({
      pickedGender: "male"
    });
  } else if {pickedGender} === "femle" {
    this.setState ({
      pickedGender: "female"
    });
  } else {
    this.setState ({
      pickedGender: "default"
    });
  }
}



setImage() {
  let currentTemp = this.props.currentTemp;

  if({currentTemp} >= 75) {
    this.setState({
      male:require('../Images/default/winter-couplesize.jpg'),
      female: require('../Images/default/winter-couplesize.jpg'),
      default: require('../Images/default/summer-groups.jpg')

    });
  }
 else if (({currentTemp} >= 60) & ({currentTemp} < 75)) {
    this.setState({
      male:require('../Images/default/winter-couplesize.jpg'),
      female: require('../Images/default/winter-couplesize.jpg'),
      default: require('../Images/default/spring-group-s.jpg')

    });
  }
  else if (({currentTemp} >= 50) & ({currentTemp} < 60)) {
    this.setState({
      male:require('../Images/default/winter-couplesize.jpg'),
      female: require('../Images/default/winter-couplesize.jpg'),
      default: require('../Images/default/fall-couple-s.jpg')

    });
  }

  else if (({currentTemp} >= 40) & ({currentTemp} < 50)) {
    this.setState({
      male:require('../Images/default/winter-couplesize.jpg'),
      female: require('../Images/default/winter-couplesize.jpg'),
      default: require('../Images/default/winter-couplesize.jpg')

    });
  }
  else {
    this.setState({
      male:require('../Images/default/winter-couplesize.jpg'),
      female: require('../Images/default/winter-couplesize.jpg'),
      default: require('../Images/female/winter-woman-crop2size.jpg')

    });
  }
}



  render () {
    const {pickedGender, male, female, default} = this.state;


    if({pickedGender} === "male") {
      return (<div className="img-box">
        <img src={male} alt="alt"/>
      </div>);
    }
    else if ({pickedGender} === "female") {
      return (<div className="img-box">
        <img src={female} alt="alt"/>
      </div>);
    }
    else {
      return (<div className="img-box">
        <img src={default} alt=" alt"/>
      </div>);
    }
  }
}


export default Img;
