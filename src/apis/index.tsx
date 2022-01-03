import axios, { AxiosError, AxiosInstance } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "https://api.ufo.town/",
});

// const ApiProvider = (instance:AxiosInstance) =>{
//   const
// }
