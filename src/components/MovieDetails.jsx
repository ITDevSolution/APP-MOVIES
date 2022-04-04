import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../MovieDetails.module.css';
import { getHttpClient } from '../utils/httpClien';


export function MovieDetails() {

    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {

        getHttpClient(`/movie/${movieId}`)
            .then(data => {
                setMovie(data)
                // console.log(data)
            })

    }, [movieId])

    if (!movie) {
        return null
    }

    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Titulo:</strong> {movie.title}</p>
                <p>
                    <strong>Generos: </strong>
                    {movie.genres.map((genres) => genres.name).join(", ")}
                </p>
                <p><strong>Descripción:</strong> {movie.overview}</p>
            </div>

        </div>
    )
}
