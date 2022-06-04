import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Menu } from "../type";

export const apiUrl = `https://api.perse.pro/api/`;

export const api = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: apiUrl,
    }),
    endpoints: (builder) => ({
      getMenus: builder.query<Menu, undefined>({
        query: (noArgs) => ({
          url: "menu",
          method: "GET",
        }),
      }),
  
    }),
  });
  
  export default api;