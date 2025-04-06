import axios from "axios";

const API = {
  getPosts: () => axios.get("https://jsonplaceholder.typicode.com/posts"),
  getWeather: (lat, lon) => {
    return axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
  },
};

export default API;
