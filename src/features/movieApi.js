import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2FkMmVlYTc1OTllYWRlNTQ1NzcyZGRiMjg2ZDM1MCIsInN1YiI6IjY0OWE0Nzk4MGU1YWJhMDBhY2YxZTAyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nF_0iS6h7-QaX2slD6Pswre6F7N4pPgKfRPGPROqGac';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({



    nowPlaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),



    movieBycategory: builder.query({
      query: (category) => ({
        url: `/movie/${category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),

    movieVideo: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),


    searchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          query
        }
      })

    }),

    movieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          page: query.page
        }
      })

    }),

    movieById: builder.query({
      query: (query) => ({
        url: `https://api.themoviedb.org/3/movie/${query}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },

      })

    })













  })

});

export const { useMovieBycategoryQuery, useNowPlayingQuery, useMovieVideoQuery, useSearchMovieQuery, useMovieByPageQuery, useMovieByIdQuery } = movieApi;