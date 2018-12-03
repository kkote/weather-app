import React from "react";



 const Display = props => {

   return (
     <div className="weather-display">
       {  (
         <div className="displayGroup">
         <div>
         In
         <span className="location">
           {" "}{props.city}{" "}
         </span>
         </div>
           <div>
           Its currently
           <span id="currentTemp" className=""> {props.currentTemp} ° F</span>
           {" "}With{" "}
           <span className="description"> {props.currentWeather}
           </span>
           </div>

         </div>
       )}
       { (<div id="hiLoTemp" className="tempRangedisplayGroup">
           <span className="temprange"> High</span>
           <span className="tempoutput">
           {props.hiTemp} ° F</span>
           <span className="temprange"> Low</span>
           <span className="tempoutput">
             {props.loTemp} °F</span>
         </div>
       )}
     </div>
   );
 }




 export default Display;
