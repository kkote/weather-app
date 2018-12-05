
     import React from "react";
     import Style from "./components/style";
     import Search from "./components/search";
     import Img from "./components/img";
     import Display from "./components/display";
     import Header from "./components/header";



    import Toolbar from '@material-ui/core/Toolbar';
    import Paper from '@material-ui/core/Paper';
    import Grid from '@material-ui/core/Grid';
    import Hidden from '@material-ui/core/Hidden';
    import AppBar from '@material-ui/core/AppBar';
    import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import withWidth from '@material-ui/core/withWidth';


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
             <React.Fragment className="pagetop">
               <div className="pagetop">

             <Toolbar className="toolbar">

               <div className="headerSearch">
           <Header />
           <Search handleSubmit={this.onCityChange} />
           </div>
           <hr className="headerdivider"  />


               <Display
                 city={city}
                 currentTemp={temp}
                 currentWeather={currentWeather}
                 hiTemp={hightemp}
                 loTemp={lowtemp}
                  />
              </Toolbar>
              </div>

            </React.Fragment>


                  <main className="maindiv">
                    <div className="tabdiv hiddenonmobile">
                      <Tabs
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                      >
                        <Tab label="Tomorrow" />
                        <Tab label="Wendnesday" />
                        <Tab label="Thursday" />
                      </Tabs>
                    </div>


                    <div className="mainFeaturedPost">
                      <Grid container className="mainFeaturedPostContainer">
                        <Grid item xs={10} md={6} className="mainDisplay">
                          <Img currentTemp={temp} />
                        </Grid>



                      <Grid item xs={10} md={5} className="mainDisplay styleDisplay">
                        <div className="rightDiv">
                        <Style currentTemp={temp}
                              city={city}
                        />
                      <Hidden smDown>
                      <Style className="hiddenonmobile" currentTemp={temp}
                              city={city}
                        />
                    </Hidden>
                      </div>

                    </Grid>



                  </Grid>

                </div>



                  </main>
           </div>
         );
       }
     }


     export default Apps;
