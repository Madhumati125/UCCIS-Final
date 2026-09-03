import api from "../api/axios";

export const getRuntimeSummary = async () => {
  const response = await api.get(
    "/v2/task33/runtime/summary"
  );

  return response.data;
};

export const getTraceIds = async () => {
  const response = await api.get(
    "/v2/task33/runtime/trace-ids"
  );

  return response.data;
};

export const getHealth = async () => {
  const response = await api.get(
    "/v2/task33/health"
  );

  return response.data;
};

export const getReplayData = async () => {
  const response = await api.get(
    "/v2/task33/replay"
  );

  return response.data;
};

export const getRuntimeChain = async (traceId) => {
  const response = await api.get(
    `/v2/task33/runtime/chain/${traceId}`
  );

  return response.data;
};