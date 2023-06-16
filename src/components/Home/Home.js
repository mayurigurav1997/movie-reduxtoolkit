import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'

function Home() {
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get()
        }

    })

    return (
        <>
            <div className="banner-img"></div>
            <MovieListing />
        </>
    )
}

export default Home