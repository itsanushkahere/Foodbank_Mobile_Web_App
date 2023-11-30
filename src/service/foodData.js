import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://tasty.p.rapidapi.com/" }),
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => ({
        url: "recipes/list",
        method: "GET",
        params: {
          from: '0',
          size: '20',
          tags: 'under_30_minutes',
          q: 'breakfast'
        },
        headers: {
          "X-RapidAPI-Key": "ca02d6479dmshf3e7f06e24d4c9ep113e2cjsn431d047da60c",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      }),
    }),
    getFoodItemsByCategory: builder.query({
      query: () => ({
        url: "recipes/list",
        method: "GET",
        params: {
          from: '0',
          size: '20',
          tags: 'under_30_minutes',
          q: 'meal'
        },
        headers: {
          "X-RapidAPI-Key": "ca02d6479dmshf3e7f06e24d4c9ep113e2cjsn431d047da60c",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetFoodItemsQuery,
  useGetFoodItemsByCategoryQuery,
  // useGetSingleProductQuery,
  // useAddProductsMutation,
} = foodApi;
