import React from "react";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: this.props.currentTemp,
      error: "error",
      gender: this.props.gender,
      woman: "w-winter1s",
      man: "manwinter2",
      img:  "winter-couplesize1s"
    };
    this.setStyle = this.setStyle.bind(this);

  };


  setStyle() {
    let currentTemp = this.props.currentTemp;

    function between(currentTemp, min, max) {
      return currentTemp >= min && currentTemp <= max;
    }

    if (currentTemp >= 75) {
      this.setState({woman: "womansummer", man: "mansummer",img: "summerdefault"
        });
    } else if (between(currentTemp, 60, 75)) {
      this.setState({woman: "womanspring", man: "manspring", img: "spring-group-s1"
      });
    } else if (between(currentTemp, 50, 60)) {
      this.setState({woman: "womanfall", man: "manfall1", img: "falldefault1"
       });
    } else if (between(currentTemp, 40, 50)) {
      this.setState({woman: "winterwoman", man: "manwinter1", img: "winter-couplesize1s"
         });
    } else {
      this.setState({woman: "w-winter1s", man: "manwinter2", img: "winter-couplesize1s"
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
      <div className="text"><h3>Women<span className="text-uppercase"></span></h3></div>
      </div>);
    }
    else if (this.props.gender === "male") {
      return (<div className="img-box">
      <img src={require('../Images/male/' + man + '.jpg')} alt="man"/>
      <div className="text"><h3>Men<span className="text-uppercase"></span></h3></div>
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
