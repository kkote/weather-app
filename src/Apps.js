
     import React from "react";
     import Style from "./components/style";
     import Search from "./components/search";
     import Img from "./components/img";
     import Display from "./components/display";
     import Header from "./components/header";

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

          console.log(this.state.city);

       };




       componentDidMount() {
         this.handleDataChange();
        };


        componentDidUpdate(prevProps, prevState) {
  // Typical usage (don't forget to compare props):
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

           <div className="header">
             <Header />
             <Search

               handleSubmit={this.onCityChange} />

               <Display
                 city={city}
                 currentTemp={temp}
                 currentWeather={currentWeather}
                 hiTemp={hightemp}
                 loTemp={lowtemp}
                  />
              </div>

                  <div className="styledisplay">
                  <Style
                    currentTemp={temp}
                    />
                  <Img currentTemp={temp}/>
                  </div>

           </div>
         );
       }
     }

     export default Apps;
