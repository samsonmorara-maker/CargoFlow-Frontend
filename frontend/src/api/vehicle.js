import api from "./axios";

export const createVehicle = async (data) => {
  const response = await api.post(
    "/accounts/vehicles/",
    data
  );

  return response.data;
};

export const getVehicle = async () => {
  const response = await api.get(
    "/accounts/vehicles/"
  );

  return response.data;
};

export const updateVehicle = async (id, data) => {
  const response = await api.put(
    `/accounts/vehicles/${id}/`,
    data
  );

  return response.data;
};

export const myVehicle = async () => {
  const response = await api.get(
    "/accounts/vehicles/my-vehicle/"
  );

  return response.data;
};