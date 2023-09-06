import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const roleApis = createApi({
  reducerPath: "dataApis",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_LIVE_URL}`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRoleApisByEmail: builder.query({
      query: (email) => `userRole?email=${email}`,
    }),
    getCustomer: builder.query({
      query: (email) => `customer?email=${email}`,
    }),
    getMenuItem: builder.query({
      query: (email) => `restaurant-data?email=${email}`,
    }),
  }),
});
export const { useGetRoleApisByEmailQuery , useGetCustomerQuery, useGetMenuItemQuery } = roleApis