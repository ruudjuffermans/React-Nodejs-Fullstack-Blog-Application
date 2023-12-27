// axiosInstance.js
import axios from "axios";
import TokenStore from "./token";

const store = new TokenStore();

const axiosInstance = axios.create({
  baseURL: "http://localhost:3201", // Replace with your API base URL
  // You can add more default settings here
  headers: {
    "Content-Type": "application/json",
    // Add any other headers you need, like authorization tokens
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    const AppCode = response.data.code;
    const data = response.data.data;
    switch (AppCode) {
      case "LOGIN_SUCCESS":
        store.storeTokens({ refresh: data.refresh, access: data.access });
        window.location = "/home";
        break;
      case "REGISTER_SUCCESS":
        window.location = "/login";
        break;
      case "ACTIVATE_SUCCESS":
        window.location = "/login";
        break;
      case "LOGOUT":
        window.location = "/login";
        localStorage.removeItem("accessToken");
        break;
      default:

      //   }
    }
    return response.data;
  },
  async (error) => {
    console.log(error);
    const statusCode = error.response.status;
    switch (statusCode) {
      case 403:
        const originalRequest = error.config;
        if (!originalRequest._retry) {
          originalRequest._retry = true;
          console.error("Unauthorized:", error.response.data);
          try {
            const refreshToken = store.getRefreshToken();
            if (!refreshToken) {
              window.location = "/login";
            }
            const response = await axiosInstance.post("refresh-token", {
              token: refreshToken,
            });
            const { accessToken } = response.data;
            store.storeAccessToken(accessToken);

            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
        break;
      default:
        break;
    }
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
