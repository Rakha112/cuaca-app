import axios from 'axios';
const API_KEY = 'ea6a3ea8ea54930d997f4fdf132e82ff';
const URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = (kota) => {
    return axios.get(URL + `/weather?q=${kota},ID&appid=${API_KEY}&units=metric`).then(res => res.data).catch(err => console.log(err))
}

export const getForecast = (lat, lon) => {
    return axios.get(URL + `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`)
  
  };