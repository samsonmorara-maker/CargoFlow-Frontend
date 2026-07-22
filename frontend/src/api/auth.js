import api from "./axios";

/**
 * Login user
 */
export const loginUser = async (credentials) => {
  const response = await api.post("/accounts/login/", credentials);
  return response.data;
};

/**
 * Register user
 */
export const signupUser = async (userData) => {
  const response = await api.post("/accounts/signup/", userData);
  return response.data;
};