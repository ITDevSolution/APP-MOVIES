// import movies from '../data/movies.json'
import { MovieCard } from './MovieCard'
import styles from '../MoviesGrid.module.css'
import { useState, useEffect } from 'react'
import { getHttpClient } from '../utils/httpClien'


export function MoviesGrid() {
    // console.log(movies)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getHttpClient('/discover/movie')
        .then((data) => {
            setMovies(data.results)
        })
        // otra forma mas simple es haciendo destructuring a "results"
        // .then (({results})=> {
        //     setMovies(results)
        // })

    }, [])


    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            }

            )}
        </ul>
    )
}
