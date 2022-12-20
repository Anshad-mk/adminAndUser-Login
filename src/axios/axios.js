import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.38.140:5000/",
  withCredentials:true
});

export default instance;