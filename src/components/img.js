import React from "react";



class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: "",
      img: require('../Images/defaultImg/winter-couplesize.jpg'),
      pickedGender: "defaultImg",
      male: "",
      female:"",
      defaultImg:"",
      error: null
    };
    this.setImage = this.setImage.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {

    if (this.props.gender !== prevProps.gender) {
    this.setGender();
    console.log("gender updated");
    }
  }

  componentDidMount() {
    this.setImage();
   };


setGender() {
  let gender = this.props.gender;

  if ({gender} === "male") {
    this.setState({
      pickedGender: "male"
    });
  } else if ({gender} === "female") {
    this.setState ({
      pickedGender: "female"
    });
  } else {
    this.setState ({
      pickedGender: "defaultImg"
    });
  }
}



setImage() {
  let currentTemp = this.props.currentTemp;

  if({currentTemp} >= 75) {
    this.setState({
      male:require('../Images/defaultImg/winter-couplesize.jpg'),
      female: require('../Images/defaultImg/winter-couplesize.jpg'),
      defaultImg: require('../Images/defaultImg/summer-groups.jpg')

    });
  }
 else if (({currentTemp} >= 60) & ({currentTemp} < 75)) {
    this.setState({
      male:require('../Images/defaultImg/winter-couplesize.jpg'),
      female: require('../Images/defaultImg/winter-couplesize.jpg'),
      defaultImg: require('../Images/defaultImg/spring-group-s.jpg')

    });
  }
  else if (({currentTemp} >= 50) & ({currentTemp} < 60)) {
    this.setState({
      male:require('../Images/defaultImg/winter-couplesize.jpg'),
      female: require('../Images/defaultImg/winter-couplesize.jpg'),
      defaultImg: require('../Images/defaultImg/fall-couple-s.jpg')

    });
  }

  else if (({currentTemp} >= 40) & ({currentTemp} < 50)) {
    this.setState({
      male:require('../Images/defaultImg/winter-couplesize.jpg'),
      female: require('../Images/defaultImg/winter-couplesize.jpg'),
      defaultImg: require('../Images/defaultImg/winter-couplesize.jpg')

    });
  }
  else {
    this.setState({
      male:require('../Images/male/winter-man-s.jpg'),
      female: require('../Images/female/winter-woman-crop2size.jpg'),
      defaultImg: require('../Images/defaultImg/winter-couplesize.jpg')

    });
  }
}



  render () {
    const {pickedGender, male, female, defaultImg} = this.state;


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
        <img src={defaultImg} alt=" alt"/>
      </div>);
    }
  }
}


export default Img;
