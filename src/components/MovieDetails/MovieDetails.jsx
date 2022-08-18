import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom'; using hook useSearchParams


export default function MovieDetails() {

    const [movieDetails, setmovieDetails] = useState(null);
    const baseURL = "https://image.tmdb.org/t/p/original";

    //////////////////////////////// first way to get id from the URL by using useSearchParams //////////////////////////
    // const [searchParam, setsearchPAram] = useSearchParams([]);
    // let id = searchParam.get("id");
    // async function getMovieDetails() {
    //     let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ddc7d1eb16f95149b7415883c824b9e9&language=en-US`)
    //     console.log(data);

    // }



    ////////////////////////////// second way to get id from the URL by using useParams ///////////////////////////
    let params = useParams();
    async function getMovieDetails() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ddc7d1eb16f95149b7415883c824b9e9&language=en-US`)
        setmovieDetails(data);
        console.log(data)
    }

    useEffect(() => {
        getMovieDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>{movieDetails?
            <div className='row mt-5'>
                <div className='col-md-4 d-flex align-items-center '>
                    <img className="w-100" src={baseURL+movieDetails.poster_path} alt=''/>
                </div>
                <div className='col-md-8 d-flex align-items-center ps-4'>
                    <div >
                        <h1>{movieDetails.title}</h1>
                        <h3 className='text-grey my-4'>{movieDetails.tagline}</h3>
                        {movieDetails.genres.map((gener)=><span className='bg-teal me-3 p-2 '>{gener.name}</span>)}
                        <h4 className='mt-4'>vote : {movieDetails.vote_average}</h4>
                        <h4 className='mt-4'>vote count : {movieDetails.vote_count}</h4>
                        <h4 className='mt-4'>popularity : {movieDetails.popularity}</h4>
                        <h4 className='mt-4'>release date : {movieDetails.release_date}</h4>
                        <h3 className='text-grey my-4'>{movieDetails.overview}</h3>
                    </div>
                </div>
            </div>:<div className='d-flex justify-content-center align-items-center vh-100'><i className='fa-2xl fas fa-spinner fa-spin'></i></div>}
        </>
    )
}
