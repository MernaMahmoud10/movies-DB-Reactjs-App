import React from 'react';
import { useContext } from 'react';
import { MediaContext } from '../../MediaContext';

export default function TVShows() {
  let { trendingPerson } = useContext(MediaContext)
  const baseURL = "https://image.tmdb.org/t/p/original"

  return (
    <>
      {trendingPerson ? <div className='row py-4'>
        <div className='col-md-4 d-flex align-items-center'>
          <div className='w-100'>
            <div className={`w-25 brdrGrey mb-3`}></div>
            <h2>Trending</h2>
            <h2>Persons</h2>
            <h2>To watch now</h2>
            <p className='text-grey'>Most watched person by day</p>
            <div className={`w-100 brdrGrey mt-3`}></div>
          </div>
        </div>

        {trendingPerson.map((person, index) => <div className='col-md-2 my-3' key={index}>
          <div className='cursorPointer'>
            <img className='w-100' src={baseURL + person.profile_path} alt={`imgOfPerson ${person.title}`} />
            <h5 className='mt-2 text-center'>{person.name}</h5>
          </div>
        </div>)}
      </div> : <div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}

    </>
  )
}
