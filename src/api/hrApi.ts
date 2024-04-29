import axios from "axios";

const hrSupportApi = axios.create({
  baseURL: "/api",
});

export default hrSupportApi;