import axios from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);


const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach the JWT access token
api.interceptors.request.use((config) => {
  const publicRoutes = [
    "/accounts/login/",
    "/accounts/signup/",
  ];

  const isPublic = publicRoutes.some((route) =>
    config.url.includes(route)
  );

  if (!isPublic) {
    const token = localStorage.getItem("access");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
export default api;