import { diffKelvin } from '../api/configApi'
import './WeatherData.scss'

export const WeatherData = ({ data }) => {

  return (
    <div className='weather-data'>
        <span>City: {data.name}</span>:
        <div>
            <span>Celcius:</span>
            <span> {Math.floor(data.main.temp - diffKelvin)} °C</span>
        </div>
        <p>weather conditions: {data.weather[0].description}</p>

        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
    </div>
  )
}
