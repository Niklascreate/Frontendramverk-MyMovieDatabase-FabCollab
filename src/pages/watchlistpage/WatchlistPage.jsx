import './watchlistpage.css'
import useStore from '../../store';
import { Link } from 'react-router-dom';

function WatchlistPage() {
    const watchlist = useStore(state => state.watchlist); // Hämta watchlist från store.js

    return (
        <section className='watchlist-wrapper'>
            <h1 className='watchlist-title'>Movies to watch</h1>
            <article className='watchlist-container'>
                {watchlist.map(movie => (
                    <div key={movie.imdbID}>
                        <Link className="movie-link" to={`/single-movie-page/${movie.imdbID}`}>
                            <article className='watchlist-box'>
                                <img src={movie.Poster} alt={movie.Title} className='watchlist-box__poster' />
                                <h2 className='watchlist-box__title'>{movie.Title}</h2>
                                <h3 className='watchlist-box__year'>{movie.Year}</h3>
                            </article>
                        </Link>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default WatchlistPage