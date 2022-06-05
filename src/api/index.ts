import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import PortfolioDetailed from "../Pages/PortfolioDetailed";
import PorfolioDetailed from "../Pages/PortfolioDetailed";
import { Menu, Portfolio, PortfolioDetail, Services } from "../type";

export const apiUrl = `https://api.perse.pro/api/`;

export const api = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: apiUrl,
    }),
    endpoints: (builder) => ({
      getMenus: builder.query<Menu, undefined>({ // get menu items
        query: (noArgs) => ({
          url: "menu",
          method: "GET",
        }),
      }),
      getServices: builder.query<Services, undefined>({ // get services items
        query: (noArgs) => ({
          url: "services",
          method: "GET",
        }),
      }),
      getPortfolio: builder.query<Portfolio, undefined>({ // get Portfolio items
        query: (noArgs) => ({
          url: "portfolio",
          method: "GET",
        }),
      }),
      getPortfolioDetailed: builder.query<PortfolioDetail, string>({ // get Portfolio inside items
        query: (slug) => ({
          url: `/portfolio/${slug}`,
          method: "GET",
        }),
      }),
    }),
  });
  
  export default api;