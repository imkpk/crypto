/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '77a2f3442fmsh1bbef3f726e6e17p1f8749jsn1611f28a94d6',
};

const newsUrl = 'https://bing-news-search1.p.rapidapi.com';

const createNewsRequest = (url) => ({ url, headers: newsHeaders });

// creating an api with by providing an endpoint
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: newsUrl }),
  endpoints: (builder) => ({
    // adding endpoints
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createNewsRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
// var options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news/search',
//   params: {q: 'q', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': '77a2f3442fmsh1bbef3f726e6e17p1f8749jsn1611f28a94d6'
//   }
// };

// /news/search?q=cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=10
