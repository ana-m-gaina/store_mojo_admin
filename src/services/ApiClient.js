import axios from "axios";

const storageData = JSON.parse(localStorage.getItem("persist:root") ?? "{}");
const currentUser = storageData.user ? JSON.parse(storageData.user) : null;
const TOKEN = currentUser?.currentUser?.accesToken || "";

export const baseURL = "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "x-auth-token": TOKEN },
});

class ApiClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = params => {
    return axiosInstance.get(this.endpoint, params).then(res => res.data);
  };

  get = id => {
    return axiosInstance
      .get(this.endpoint + "/find/" + id)
      .then(res => res.data);
  };
}


export default ApiClient;
