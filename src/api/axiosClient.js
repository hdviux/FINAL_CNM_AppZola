import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//let token = localStorage.getItem("token");
const axiosClient = axios.create({
  baseURL: "http://192.168.1.3:3000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    //authorization: `${token}`,
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    // config.headers.authorization = AsyncStorage.getItem("token")
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (reponse) {
    return reponse;
  },
  function (error) {
    console.log("ERROR REPONSE: ", error.response);
    return Promise.reject(error);
  }
);
export default axiosClient;
