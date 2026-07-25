import api from "./axios";

export const getAllShipments = async () => {
  const response = await api.get("/shipments/");
  return response.data;
};
export async function getAllDrivers() {
  const response = await api.get("/accounts/drivers/");
  return response.data;
}
export const getAllCustomers = async () => {
  const response = await api.get("/accounts/customers/");
  return response.data;
};
export const getDashboard = async () => {
    const response = await api.get("/shipments/admin/dashboard/");
    return response.data;
};