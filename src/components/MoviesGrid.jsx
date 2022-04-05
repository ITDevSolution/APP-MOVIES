// import movies from '../data/movies.json'
import { MovieCard } from './MovieCard'
import styles from '../MoviesGrid.module.css'
import { useState, useEffect } from 'react'
import { getHttpClient } from '../utils/httpClien'
import { Spinner } from './Spinner'
import { useQuery } from '../utils/useQuery'



export function MoviesGrid() {
    // HOOKS
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    // LLAMADA AL HOOK PERSONALIZADO 
    const query = useQuery()
    //capturar el valor de search mediante URLPARAMS
    const search = query.get("search")
    // console.log(search)

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search ? `/search/movie?query=${search}` : '/discover/movie'
        getHttpClient(searchUrl)
        .then((data) => {
            setMovies(data.results)
            setIsLoading(false)
        })
        // otra forma mas simple es haciendo destructuring a "results"
        // .then (({results})=> {
        //     setMovies(results)
        // })

    }, [search])

    if(isLoading) return <Spinner />

    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie} />
            }

            )}
        </ul>
    )
}
