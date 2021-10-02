import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// getting heaers first
const cryptoHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '77a2f3442fmsh1bbef3f726e6e17p1f8749jsn1611f28a94d6',
};
// getting api or base url
const cryptoUrl = 'https://coinranking1.p.rapidapi.com';

// a function for url and headers
const createRequest = (url) => ({ url, headers: cryptoHeaders });

// creating an api with by providing an endpoint
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: cryptoUrl }),
  endpoints: (builder) => ({
  // adding endpoints
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
