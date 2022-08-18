import React from 'react';
import { useContext } from 'react';
import { MediaContext } from '../../MediaContext';
import { Link } from "react-router-dom";

export default function TVShows() {
  let { trendingTVShows } = useContext(MediaContext)
  const baseURL = "https://image.tmdb.org/t/p/original"

  return (
    <>
      {trendingTVShows ? <div className='row py-4'>
        <div className='col-md-4 d-flex align-items-center'>
          <div className='w-100'>
            <div className={`w-25 brdrGrey mb-3`}></div>
            <h2>Trending</h2>
            <h2>Tv Shows</h2>
            <h2>To watch now</h2>
            <p className='text-grey'>Most watched tvshows by day</p>
            <div className={`w-100 brdrGrey mt-3`}></div>
          </div>
        </div>

        {trendingTVShows.map((tv, index) => <div className='col-md-2 my-3' key={index}>
          <Link to={`/tvshowsdetails/${tv.id}`} className='cursorPointer'>
            <img className='w-100' src={baseURL + tv.poster_path} alt={`imgOfMovie ${tv.title}`} />
            <h5 className='mt-2 text-center'>{tv.name}</h5>
          </Link>
        </div>)}
      </div> : <div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}

    </>
  )
}
