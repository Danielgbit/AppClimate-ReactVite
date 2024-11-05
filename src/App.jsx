import { useEffect, useState } from "react";
import { weatherApi } from "./api/weatherApi";
import { WeatherData } from "./components/WeatherData";

const App = () => {
  const [valueCity, setValueCity] = useState("");
  const [submit, setSubmit] = useState(false);
  const [data, setWeatherData] = useState();

  const handleSubmit = (e) => {
    setSubmit(true);
    e.preventDefault();
  };

  const handleValue = (e) => {
    const { value } = e.target;
    setValueCity(value, ...valueCity);
  };

  useEffect(() => {
    if (!valueCity.length) return;
    const callApi = async () => {
      const res = await weatherApi(valueCity);
      setWeatherData(res);
    };
    callApi();
    setTimeout(() => {
      setSubmit(false);
    }, 1000);
    setValueCity("");
  }, [submit]);

  return (
    <div className="container">
        <h1>climate app</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleValue}
            value={valueCity}
            type="text"
            placeholder="Enter a city"
            />
          <button type="submit">search</button>
        </form>

        {data && <WeatherData data={data} />}
    </div>
  );
};

export default App;
