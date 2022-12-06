import './App.css';
import axios from 'axios';
import { useState } from 'react';
import bgimg from "./bg.jpg"


let baseUrl = ``;
if(window.location.href.split(":")[0] === "http"){
  
   baseUrl = `http://localhost:5000`
}


function App() {
  const [cityname, setCityname] = useState("");
  const [countryname, setcountryname] = useState("");
  const [Weathertemp, setWeathertemp] = useState("");
  const [Weathertempmin, setWeathertempmin] = useState("");


  function getWeather(e) {
    e.preventDefault()

    const options = {
      method: 'GET',
      url: `${baseUrl}/weather/${cityname}`,
      // params: { q: cityname },
      // headers: {
      //   'X-RapidAPI-Key': '4af0c4866bmsh9e303087aa9678ap1a85cdjsn9202652b7d5e',
      //   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      // }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
  
      setcountryname(response.data.city);
      setWeathertemp(response.data.temp);
      setWeathertempmin(response.data.min);
  
    }).catch(function (error) {
      console.error(error);
    });


  }
  return (
    <div className="App">

      <div className='main'>

        <form className="input my-5" onSubmit={getWeather}>
          <input type="text" className="form-control" placeholder='Search City' onChange={(e) => {
            setCityname(e.target.value)
          }} />
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>


        {/* <h4  > <b> COUNTRY NAME: </b> {countryname}</h4> */}
        <h5 className={(Weathertemp === "") ? "none" : "block"}> <b>  CITY NAME: </b> {countryname}</h5>
        <h5 className={(Weathertemp === "") ? "none" : "block"}> <b> TEMPERATURE: </b> {Weathertemp}°C</h5>
        <h5 className={(Weathertemp === "") ? "none" : "block"}> <b> Min:   </b> {Weathertempmin}°C</h5>
        {/* <img className={(countryname === "") ? "none" : "block"} src={icon} width={50}/> */}

      </div>


    </div>
  );
}

export default App;
