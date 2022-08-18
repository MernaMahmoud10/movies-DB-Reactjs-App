import { createContext } from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';

export let MediaContext = createContext([]);

export function MediaContextProvider(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trendingMovies, settrendingMovies] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trendingTVShows, settrendingTVShows] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trendingPerson, setPeople] = useState([]);

    // ///////to use hook (useSearchPArams)
    // let navigate = useNavigate();
    // function goToDetails(id)
    // {
    //   navigate({
    //     pathname:'/moviedetails',
    //     search:`?id=${id}`
    //   })
    // }

    async function getTrendingAll(type, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=ddc7d1eb16f95149b7415883c824b9e9`)
        callback(data.results);
    }
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getTrendingAll("movie", settrendingMovies)
        getTrendingAll("tv", settrendingTVShows)
        getTrendingAll("person", setPeople)
    }, []);

    return <MediaContext.Provider value={{ trendingMovies, trendingTVShows, trendingPerson }}>
        {props.children}
    </MediaContext.Provider>

}
