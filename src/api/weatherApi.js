import axios from "axios";
import { API_KEY, url } from "./configApi";

export const weatherApi = async (city) => {
  
  if (city.length > 0) {
      try {
        const res = await axios.get(`${url}?q=${city}&appid=${API_KEY}`);
        const data = await res.data;
        return data;
      } catch (error) {
        console.error(error);
      }
  }
};
