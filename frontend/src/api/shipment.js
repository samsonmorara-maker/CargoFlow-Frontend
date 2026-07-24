import api from "./axios";

// Create Shipment
export const createShipment = async (shipmentData) => {
  const response = await api.post(
    "/shipments/",
    shipmentData
  );

  return response.data;
};

// Get Customer Shipments
export const getShipments = async () => {
  const response = await api.get(
    "/shipments/"
  );

  return response.data;
};

// Shipment Details
export const getShipment = async (uuid) => {
  const response = await api.get(
    `/shipments/${uuid}/`
  );

  return response.data;
};

export const getTracking = async (trackingNumber) => {
  const response = await api.get(
    `/shipments/track/${trackingNumber}/`
  );

  return response.data;
};

export const cancelShipment = async (uuid, reason) => {
  const response = await api.post(
    `/shipments/${uuid}/cancel/`,
    {
      reason,
    }
  );

  return response.data;
};