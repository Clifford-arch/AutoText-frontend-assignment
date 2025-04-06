import { useState, useEffect } from "react";
import API from "../services/api";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import "../assets/scss/weather.css";
import { Container, Spinner } from "react-bootstrap";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const response = await API.getWeather(
          position.coords.latitude,
          position.coords.longitude
        );

        setWeather(response.data);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
      </Container>
    );
  }

  if (error) {
    return (
      <div className="weather-error">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`weather-container ${
        weather.current_weather.is_day ? "day-theme" : "night-theme"
      } fade-in`}
    >
      <div className="weather-header">
        <h3 className="title">
          {weather.current_weather.is_day ? "Daytime" : "Nighttime"}
        </h3>
        {weather.current_weather.is_day ? (
          <BsSunFill className="sun-icon" />
        ) : (
          <BsMoonFill className="moon-icon" />
        )}
      </div>

      <div className="weather-content">
        <div className="temperature-display">
          {weather.current_weather.temperature}
          {weather.current_weather_units.temperature}
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span>Time</span>
            {weather.current_weather.time}
          </div>
          <div className="detail-item">
            <span>Wind</span>
            {weather.current_weather.windspeed}
            {weather.current_weather_units.windspeed}
          </div>
          <div className="detail-item">
            <span>Elevation</span>
            {weather.elevation}m
          </div>
          <div className="detail-item">
            <span>Coordinates</span>
            {weather.latitude}, {weather.longitude}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
