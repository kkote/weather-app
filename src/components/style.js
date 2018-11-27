
import React from "react";



class Style extends Component {
  constructor() {
    super();
    this.state = {
      top: null,
      pants: false,
      outer: false,
      shoes: false,
      tempNum: this.state.temp,
      error: null
    };
  }

  if (tempNum >= 75) {
    this.setState({
      outer: "None",
      top: "T-shirt",
      pants: "Shorts",
      shoes: "Sandals",
      img: require('./Images/summer-groups.jpg'),
    });
  } else if ((tempNum >= 60) & (tempNum < 75)) {
    this.setState({
      outer: "Hoodie or Light Jacket",
      top: "T-shirt",
      pants: "Shorts or Pants",
      shoes: "Shoes ",
      img: require('./Images/spring-group-s.jpg'),
    });
  } else if ((tempNum >= 50) & (tempNum < 60)) {
    this.setState({
      outer: "Jacket/Fleece",
      top: "T-shirt or Long sleeve",
      pants: "Pants",
      shoes: "Shoes"
    });
  } else if ((tempNum >= 40) & (tempNum < 50)) {
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
