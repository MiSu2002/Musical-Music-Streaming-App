import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0041748fb3msha41116a84d79f56p1ed132jsnebe854d6b232',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '0041748fb3msha41116a84d79f56p1ed132jsnebe854d6b232');
                
                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({
              query: () => '/charts/world',
            }),
        }),
    });

    export const {useGetTopChartsQuery} = shazamCoreApi