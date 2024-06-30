import './favoritespage.css'
import useStore from '../../store';
import { Link } from 'react-router-dom';

function FavoritesPage() {
    const favoritelist = useStore(state => state.favoritelist); // Hämta watchlist från store.js

    return (
        <section className='favorite-wrapper'>
            <article className='favorite-title'>
                <h1 className='favorite-title'>All your favorites</h1>
            </article>
            <article className='favorite-container'>
                {favoritelist.map(movie => (
                    <div key={movie.imdbID}>
                        <Link className="movie-link" to={`/single-movie-page/${movie.imdbID}`}>
                            <article key={movie.imdbID} className='favorite-box'>
                                <img src={movie.Poster} alt={movie.Title} className='favorite-box__poster' />
                                <h2 className='favorite-box__title'>{movie.Title}</h2>
                                <h3 className='favorite-box__year'>{movie.Year}</h3>
                            </article>
                        </Link>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default FavoritesPage
