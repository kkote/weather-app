import React from "react";



 const Display = props => {
   return (
     <div className="weather-display">
       {  (
         <div className="displayGroup">
         <div>
         In
         <span className="location">
           {" "}{this.props.city}{" "}
         </span>
         </div>
           <div>
           Its currently
           <span id="curentTemp" className=""> {this.props.temperature} ° F</span>
           With
           <span className="description"> {this.props.description}
           </span>
           </div>

         </div>
       )}
       { (<div id="hiLoTemp" className="tempRangedisplayGroup">
           <span className="temprange"> High</span>
           <span className="tempoutput">
           {this.props.maxtemp} ° F</span>
           <span className="temprange"> Low</span>
           <span className="tempoutput"> {this.props.mintemp} °F</span>
         </div>
       )}
     </div>
   );
 }




 export default Display;



 import React from "react";
 import { Grid, Cell } from "react-flexr";
 import "react-flexr/styles.css";

 const Weather = (props) => {
   return(
     <div>
       {props.country && props.city && <p>Location: {props.city}, {props.country}</p>}
       {props.temperature && <p>Temperature: {props.temperature}</p>}
       {props.humidity && <p>Humidity: {props.humidity}</p>}
       {props.description && <p>Conditions:  {props.description}</p>}
       {props.error && <p>{props.error}</p>}
     </div>
   )
 }
 export default Weather;
