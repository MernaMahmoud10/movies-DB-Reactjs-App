import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../MediaContext';

// import { useNavigate } from 'react-router-dom';  usehook usesearchparams

// eslint-disable-next-line react-hooks/rules-of-hooks
export default function Home() {

  let { trendingMovies, trendingTVShows, trendingPerson } = useContext(MediaContext)
  const baseURL = "https://image.tmdb.org/t/p/original"

  return (
    <>

      {/*********************************** {Movies} ************************************/}

      {trendingMovies ? <div className='row py-4'>
        <div className='col-md-4 d-flex align-items-center'>
          <div className='w-100'>
            <div className={`w-25 brdrGrey mb-3`}></div>
            <h2>Trending</h2>
            <h2>Movies</h2>
            <h2>To watch now</h2>
            <p className='text-grey'>Most watched movies by day</p>
            <div className={`w-100 brdrGrey mt-3`}></div>
          </div>
        </div>
        {/* when use shook useSearchParams add (onClick={()=>goToDetails(movie.id)}) to the next line */}
        {trendingMovies.map((movie, index) => <div className='col-md-2 my-3' key={index}>

          {/* to use useParams */}
          <Link to={`/moviedetails/${movie.id}`} className='cursorPointer'>
            <img className='w-100' src={baseURL + movie.poster_path} alt={`imgOfMovie ${movie.title}`} />
            <h5 className='mt-2 text-center'>{movie.title}</h5>
          </Link>
        </div>)}
      </div> : <div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}


      {/*********************************** {tvshows} ************************************/}
      <div className='row py-4'>
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
          <div className='cursorPointer'>
            <img className='w-100' src={baseURL + tv.poster_path} alt={`imgOfMovie ${tv.title}`} />
            <h5 className='mt-2 text-center'>{tv.name}</h5>
          </div>
        </div>)}
      </div>


      {/*********************************** {person} ************************************/}
      <div className='row py-4'>
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
      </div>
    </>
  )
}
