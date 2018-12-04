
     import React from "react";
     import Style from "./components/style";
     import Search from "./components/search";
     import Img from "./components/img";
     import Display from "./components/display";
     import Header from "./components/header";


     import PropTypes from 'prop-types';
    import { withStyles } from '@material-ui/core/styles';
    import CssBaseline from '@material-ui/core/CssBaseline';
    import Toolbar from '@material-ui/core/Toolbar';
    import IconButton from '@material-ui/core/IconButton';
    import Paper from '@material-ui/core/Paper';
    import Typography from '@material-ui/core/Typography';
    import Grid from '@material-ui/core/Grid';
    import Card from '@material-ui/core/Card';
    import CardContent from '@material-ui/core/CardContent';
    import CardMedia from '@material-ui/core/CardMedia';
    import Hidden from '@material-ui/core/Hidden';
    import AppBar from '@material-ui/core/AppBar';


     let Api_Key = process.env.REACT_APP_API_KEY;




     class Apps extends React.Component {
       constructor(props) {
         super(props);


         this.state = {
           data: '',
           city: "St. Louis",
           currentTemp: " ",
           currentWeather: " ",
           hiTemp:"",
           loTemp:"",
           isLoaded: false,
           error: null
         };
         this.onCityChange = this.onCityChange.bind(this);
       }








       handleDataChange() {

         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&units=imperial&appid=${Api_Key}`)
         .then(res => res.json())
               .then(
                 (result) => {
                   this.setState({
                     currentTemp:  parseInt(result.main.temp, 10),
                     isLoaded: true,
                     city: result.name,
                     data: result,
                     currentWeather: (result.weather[0].description),
                     hiTemp: parseInt(result.main.temp_max, 10),
                     loTemp: parseInt(result.main.temp_min, 10)
                   });
                   console.log(this.state.data);
                 },
                 (error) => {
                   this.setState({
                     isLoaded: true,
                     error
                   });
                 }
               )
             };


       onCityChange(e) {
         e.preventDefault();
         this.setState({
        city: e.target.city.value
       });

       };


       componentDidMount() {
         this.handleDataChange();
        };


        componentDidUpdate(prevProps, prevState) {
      if (this.state.city !== prevState.city) {
        this.handleDataChange();
      }
    }

       render() {
         const city = this.state.city;
         const temp = this.state.currentTemp ;
         const hightemp = this.state.hiTemp ;
         const lowtemp = this.state.loTemp ;
         const currentWeather = this.state.currentWeather ;



         return (
           <div className="App">
             <React.Fragment>
               <AppBar className="appbar">

             <Header />


             </AppBar>
            </React.Fragment>
                  <main>
                    <Paper className="paperforsearchanddisplay">
                      <Grid container className="GridContainer">
                        <Grid item md={6} classname="searchitemgrid">
                    <Search handleSubmit={this.onCityChange} />
                    </Grid>

                    <Grid item md={6}>
                    <Display
                      city={city}
                      currentTemp={temp}
                      currentWeather={currentWeather}
                      hiTemp={hightemp}
                      loTemp={lowtemp}
                       />
                     </Grid>
                   </Grid>

                     </Paper>
                    <div className="mainFeaturedPost">
                      <Grid container className="mainFeaturedPostContainer">
                        <Grid item xs={10} md={4} className="mainDisplay styleDisplay">
                          <Style currentTemp={temp}
                                city={city}
                          />
                      </Grid>
                        <Grid item xs={10} md={6} className="mainDisplay">
                          <Img currentTemp={temp} />
                        </Grid>

                  </Grid>
                </div>
                  </main>
           </div>
         );
       }
     }


     export default Apps;
