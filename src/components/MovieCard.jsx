import { Link } from 'react-router-dom'
import styles from '../MovieCard.module.css'

export function MovieCard({ movie }) {
    // console.log(movie)
    const imgUrl = "https://image.tmdb.org/t/p/w300"
    return (
        <li className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
            <img
                width={230}
                height={345}
                src={`${imgUrl}${movie.poster_path}`}
                alt={movie.original_title}
                className={styles.movieImage}
            />
            <div>{movie.title}</div>
            </Link>
        </li>


    )
}
