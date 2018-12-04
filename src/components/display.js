import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



 const Display = props => {


   return (
     <Grid item xs={12} md={4}>
        <Paper elevation={0} className="blogsidebarpaper">
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
     </Paper>
     </Grid>
   );
 }




 export default Display;
