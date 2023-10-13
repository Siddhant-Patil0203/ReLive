import axios from "axios";

const instance = axios.create({
  baseURL: "https://relive-server-2.vercel.app", //! For using deployed backend, use this URL to connect to your deployed server.
  //  baseURL: "http://localhost:5000", //! For using local Development, use this URL to connect to your local server.
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  } 

  return req;
});

export default instance;
