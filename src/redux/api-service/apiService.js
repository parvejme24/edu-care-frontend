import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://edu-care-backend-me.vercel.app/api/v1/",
  }),
  endpoints: () => ({}),
});

export default apiService;
