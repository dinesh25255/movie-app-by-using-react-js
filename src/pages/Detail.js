import React from 'react'
import { useMovieByIdQuery, useMovieVideoQuery, } from '../features/movieApi';
import { useParams } from 'react-router';

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieVideoQuery(id);
  const { data: dat, isLoading: load, isError: isE, error: err } = useMovieByIdQuery(id);

  if (isLoading || load) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${dat.poster_path}')` }} className='h-[100vh] w-[100vw] bg-no-repeat sticky '  >
      <div className=' py-5 space-y-5 max-w-6xl mx-auto'>
        <h1 className='text-center text-3xl font-bold'>{dat.title}</h1>
        <iframe width="560" height="315 " className='mx-auto mt-11' src={`https://www.youtube.com/embed/${data.results[0]?.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>{dat.overview}</p>
      </div>
    </div >
  )
}

export default Detail
