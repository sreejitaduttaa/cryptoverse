import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',

  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),

  endpoints: (builder) => ({
    getCryptoNews: builder.query({

      query: (token) => {
      const apiUrl = `/crypto?&languages=en&batchSize=25`;
      const tokenParam = token ? `&token=${token}` : ''; // Conditional token inclusion
      return createRequest(`${apiUrl}${tokenParam}`);
      }
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
