import React from "react";
import './App.css';
import {mdiWeatherLightning as Lightning} from "@mdi/js";
import { mdiWeatherSnowy as Snow} from '@mdi/js';
import { mdiWeatherPouring as Rain} from '@mdi/js';
import { mdiWeatherRainy as Drizzle} from '@mdi/js';
import { mdiWeatherFog as Fog} from '@mdi/js';
import { mdiWeatherSunny as Sun} from '@mdi/js';
import { mdiWeatherCloudy as Cloud} from '@mdi/js';


//import Wbsunny from "@material-ui/icons/WbSunny"
//import Button from "@material-ui/core/Button"

import Weather from "./app_component/weather.component"

//api call api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const APIKey = process.env.REACT_APP_WEATHER_API_KEY


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celcius: undefined,
      tempMax: undefined,
      tempMin: undefined,
      description: "",
      error: false
    };
    this.getWeather();
    this.weatherIcon = {
      Thunderstorm: Lightning,
      Drizzle: Drizzle,
      Rain: Rain,
      Snow: Snow,
      Fog: Fog,
      Clear: Sun,
      Clouds: Cloud


    };
  }

  calCelcius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell;
  }

  getWeatherIcon(rangeID){
    switch(true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon:this.weatherIcon.Thunderstorm});
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({icon:this.weatherIcon.Drizzle});
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({icon:this.weatherIcon.Rain});
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({icon:this.weatherIcon.Snow});
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({icon:this.weatherIcon.Fog});
        break;
      case rangeID === 800:
        this.setState({icon:this.weatherIcon.Clear});
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({icon:this.weatherIcon.Clouds});
        break;
        default:
          this.setState({icon:this.weatherIcon.Clouds});
        }
    }
  
  
  getWeather = async () =>{
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKey}`)

    const response = await apiCall.json();

    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country,
      celcius: this.calCelcius(response.main.temp),
      tempMax: this.calCelcius(response.main.temp_max),
      tempMin: this.calCelcius(response.main.temp_min),
      description: response.weather[0].description,
    })
    this.getWeatherIcon(response.weather[0].id)
  };

  state = {}
  render(){
    return(
      <div className="App">
      <Weather 
      city = {this.state.city}
      country = {this.state.country} 
      tempCelius = {this.state.celcius}
      tempMax = {this.state.tempMax}
      tempMin = {this.state.tempMin}
      description = {this.state.description}
      weatherIcon= {this.state.icon}
      
      
      
      />
     </div>
   );
  }
}


export default App;
