
import React from "react";



class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "top",
      pants: "pants",
      outer: "out",
      shoes: "shoes",
      currentTemp: this.props.currentTemp,
      error: "error"
    };
this.setStyle = this.setStyle.bind(this);

};



componentDidUpdate(prevProps, prevState) {
  if (this.state.currentTemp !== prevState.currentTemp) {
  this.setStyle();
  }
  console.log("style updated");
  console.log(this.props.currentTemp);
}


  setStyle(){
  let currentTemp = this.state.currentTemp;
  if ({currentTemp} >= 75) {
    this.setState({
      outer: "None",
      top: "T-shirt",
      pants: "Shorts",
      shoes: "Sandals"
    });
  } else if ((currentTemp >= 60) & (currentTemp < 75)) {
    this.setState({
      outer: "Hoodie or Light Jacket",
      top: "T-shirt",
      pants: "Shorts or Pants",
      shoes: "Shoes "
    });
  } else if ((currentTemp >= 50) & (currentTemp < 60)) {
    this.setState({
      outer: "Jacket/Fleece",
      top: "T-shirt or Long sleeve",
      pants: "Pants",
      shoes: "Shoes"
    });
  } else if ((currentTemp >= 40) & (currentTemp < 50)) {
    this.setState({
      outer: "Jacket/Fleece ",
      top: " Long Sleeve",
      pants: "Pants",
      shoes: "Shoes or Boots"
    });
  } else {
    this.setState({
    outer: "Layers: Hoodie/Jacket/Coat",
    top: "Long Sleeve",
    pants: "Thick Pants or Layers",
    shoes: "Boots"});
  }
}










  render() {

    const { outer, top, pants, shoes} = this.state;

    return (
      <div className="clothesDisplay">
        {(<div >
            <span className="clothesType"> Outer: </span>
            <span > {outer}</span>
          </div>
        )}
        {(<div className="style-div">
            <span className="clothesType"> Top: </span>
            <span className="style-result"> {top}</span>
          </div>
        )}
        {(<div className="style-div">
            <span className="clothesType"> Pants: </span>
            <span className="style-result"> {pants}</span>
          </div>
        )}
        {(<div className="style-div">
            <span className="clothesType"> Shoes: </span>
            <span className="style-result"> {shoes}</span>
          </div>
        )}
      </div>
    );
  }
}


export default Style;
