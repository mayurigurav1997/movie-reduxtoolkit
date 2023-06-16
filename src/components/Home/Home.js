import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from "../../features/movies/movieSlice"

function Home() {
    const movieText = "Harry"
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("err:", err)
                })
            dispatch(addMovies(response.data))
            console.log("The response from API", response)
        }
        fetchMovies();
    }, [])

    return (
        <>
            <div className="banner-img"></div>
            <MovieListing />
        </>
    )
}

export default Home