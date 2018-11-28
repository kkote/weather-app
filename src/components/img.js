import React from "react";



class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: 70,
      img: require('../Images/winter-couplesize.jpg'),
      error: null
    };
    this.setImg = this.setImg.bind(this);







  };





  setImg(currentTemp){
  if (currentTemp >= 75) {
    this.setState({
      img: require('../Images/summer-groups.jpg')
    });
  } else if ((currentTemp >= 60) & (currentTemp < 75)) {
    this.setState({
      img: require('../Images/spring-group-s.jpg')
    });
  } else if ((currentTemp >= 50) & (currentTemp < 60)) {
    this.setState({
      img: require('../Images/fall-couple-s.jpg')
    });
  } else if ((currentTemp >= 40) & (currentTemp < 50)) {
    this.setState({
      img: require('../Images/winter-couplesize.jpg')
    });
  } else {
    this.setState({
    img: require('../Images/winter-woman-crop2size.jpg')});
  }
}



  render() {

    return (<div className="img-box">
      <img src={this.state.img}/>
    </div>);
  }
}


export default Img;
