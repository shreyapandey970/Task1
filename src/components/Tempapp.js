import {useState,useEffect} from "react";
import React from "react";
import './css/style.css'; 

const Tempapp = () => {

    //useEffect hook - your react component needs to do something after getting the data

    
    const [search,setSearch] = useState(null);  //To get the value user enters and feed it on API
    const [count,setCount] = useState(null);
    const [lang,setLanguage] = useState("en");


    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search},${count}&units=metric&lang=${lang}&appid=61ed6c3e5c5631e1b832d5365a45a8b5`  //So that the initial startup shows default values
            //&units=metric to get the temperature in celsius
            const response = await fetch(url)
            const resJson = await response.json();
            setCity(resJson.main);  //some other value fetched
            setCountry(resJson.sys);
            setWeather(resJson.weather);
            setTimezone(resJson.timezone);

        }   //async - since it returns a promise

        fetchApi();
    },[search,count,lang])

    const [city,setCity] = useState(null);    //UseState is a ReactHooks - We pass an initial state and in return it gives the current state
    const [country,setCountry] = useState(null);
    const [weather,setWeather] = useState({});
    const [timezone,setTimezone] = useState(null);

    //61ed6c3e5c5631e1b832d5365a45a8b5 - API KEY
    //https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

    


    return(
        <>
        <body bgcolor="#33495F">
            <div id="bluebar">
                <img src={require("./photos/logo.png")} height={50} width={200} id="vayu" alt="logo"></img>
                
                <div className="zoom">
                    <img src={require("./photos/timezone.png")} height={80} width={80} alt="timezone" className="myDIV"></img>
                        <div className="hide">TimeZone<br></br>{timezone}</div>
                </div>

                <div className="zoom1">
                    <img src={require("./photos/sealevel.png")} height={70} width={70} alt="timezone" className="myDIV"></img>
                        <div className="hide">SeaLevel<br></br>
                        </div>
                </div>

                <div className="zoom2">
                    <img src={require("./photos/aboutus.png")} height={45} width={45} alt="timezone" className="myDIV"></img>
                        <div className="hide">VAYU is a Weather Prediction App<br></br>
                        </div>
                </div>

            </div>


        
            <div id="back">
                <img src={require("./photos/giphy.gif")} height={450} width={600} alt="gif"></img>
            </div>

            <p id="Title">How's the Weather Like?</p>
                <div className="searchbars">
                    
                    <p><input type = "search" id="inputcss" value={search} className="inputField" placeholder="Enter City" onChange={(event)=>{ setSearch(event.target.value)}}></input></p>
                    <p><input type = "search" id="inputcss" value={count} className="inputField" placeholder="Enter Country" onChange={(event)=>{ setCount(event.target.value)}}></input></p>
                    <select value={lang} className="inputField" placeholder="Language" onChange={(event)=>{ setLanguage(event.target.value)}}>
                        <option value="af">Afrikaans</option>
                        <option value="en">English</option>
                        <option value="it">Italian</option>
                        <option value="kr">Korean</option>
                        <option value="en">Default</option>
                    </select>
                </div>

                
            <br></br>
            <br></br>
            <br></br>

            
            {!city ? (
            <div id="card">Data Unreachable</div>
            ) : ( <div id="card">
                <div>
                <h1>{search}, {count}</h1>
                <h2>{city.temp}°c</h2>
                <h3>Min: {city.temp_min}°c | Max: {city.temp_max}°c</h3>
                <h3>Feels Like: {city.feels_like}°c</h3>
                <h3>Humidity: {city.humidity}</h3>
                <h3>Sunrise: {country.sunrise}</h3>
                <h3>Sunset: {country.sunset}</h3>
                <h3>Weather: {weather[0].main}</h3>
                <h3>Description: {weather[0].description}</h3>
                </div>

                {weather[0].main==="Rains" ?  <img id="animation" src={require('./photos/rain.gif')} height={900} width={1340} alt="Rains"></img>:
               <p></p>}

                
                
            </div>
            )
            } 

                <div>
                    <footer id="footer">
                        <p>©2023-2023<br></br>VAYU WEATHER PREDICTIONS
                        <br></br>All rights reserved</p>
                    </footer>
                </div>
                
        </body>    
           
           
        </> //Syntactical sugar form
    )
    
}

export default Tempapp;

//Onchange - (Handler)Gets value of changed value 
//character by character fetching of data
//<img src="./logo.png" alt="weather app" height={100} width={200}></img>
// background="https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif" id="back"
//"https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif"
/*<div>


               
                </div>
*/
