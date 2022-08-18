import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom'; using hook useSearchParams


export default function TvshowsDetails() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tvshowsDetails, settvshowsDetails] = useState(null);
    const baseURL = "https://image.tmdb.org/t/p/original";

    //////////////////////////////// first way to get id from the URL by using useSearchParams //////////////////////////
    // const [searchParam, setsearchPAram] = useSearchParams([]);
    // let id = searchParam.get("id");
    // async function getMovieDetails() {
    //     let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ddc7d1eb16f95149b7415883c824b9e9&language=en-US`)
    //     console.log(data);

    // }



    ////////////////////////////// second way to get id from the URL by using useParams ///////////////////////////
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let params = useParams();
    async function gettvshowsDetails() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=ddc7d1eb16f95149b7415883c824b9e9&language=en-US`)
        settvshowsDetails(data);
        console.log(data)
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        gettvshowsDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>{tvshowsDetails?
            <div className='row mt-5'>
                <div className='col-md-4 d-flex align-items-center '>
                    <img className="w-100" src={baseURL+tvshowsDetails.poster_path} alt=''/>
                </div>
                <div className='col-md-8 d-flex align-items-center ps-4'>
                    <div >
                        <h1>{tvshowsDetails.name}</h1>
                        <h3 className='text-grey my-4'>{tvshowsDetails.tagline}</h3>
                        {tvshowsDetails.genres.map((gener)=><span className='bg-teal me-3 p-2 '>{gener.name}</span>)}
                        <h4 className='mt-4'>vote : {tvshowsDetails.vote_average}</h4>
                        <h4 className='mt-4'>vote count : {tvshowsDetails.vote_count}</h4>
                        <h4 className='mt-4'>popularity : {tvshowsDetails.popularity}</h4>
                        <h4 className='mt-4'>release date : {tvshowsDetails.release_date}</h4>
                        <h3 className='text-grey my-4'>{tvshowsDetails.overview}</h3>
                    </div>
                </div>
            </div>:<div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}
        </>
    )
}
