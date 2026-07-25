import api from "./axios";

export const getAllShipments = async () => {
  const response = await api.get("/shipments/");
  return response.data;
};