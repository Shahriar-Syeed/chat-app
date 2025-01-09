import axios from "axios";
import apiUrl from "../apiUrl/apiUrl";

export const axiosInstance = axios.create({
  baseURL: apiUrl.base,
  withCredentials: true,
});
