import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_API_URL;

export const getWeather = (kota) => {
  return axios
    .get(URL + `/weather?q=${kota},ID&appid=${API_KEY}&units=metric`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getForecast = (lat, lon) => {
  return axios.get(
    URL +
      `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`
  );
};
