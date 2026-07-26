import api from "./axios";

export const getDriverDashboard = async () => {
  const response = await api.get(
    "/shipments/driver-dashboard/"
  );

  return response.data;
};
export const getAssignedShipments = async () => {
  const response = await api.get(
    "/shipments/my-deliveries/"
  );

  return response.data;
};


export const pickupShipment = async (pickup_qr_token) => {
  const response = await api.post(
    "/shipments/pickup/",
    {
      pickup_qr_token,
    }
  );

  return response.data;
};
export const confirmDelivery = async (data) => {
  const response = await api.post(
    "/shipments/confirm-delivery/",
    data
  );

  return response.data;
};
export const getDriverHistory = async () => {
  const response = await api.get(
    "/shipments/history/"
  );

  return response.data;
};
