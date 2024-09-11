import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://edu-care-backend-me.vercel.app/api/v1/"; // Export base URL

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
});

export default apiService;
