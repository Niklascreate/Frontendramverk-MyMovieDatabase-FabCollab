import './pagecard.css'
import { Link } from 'react-router-dom';


function PageCard({ movie, openModal }) {

  return (

    <div className="page-container">
    <div className='page-card' key={movie.imdbid}>
      <Link className='pagecard-link' to={`/single-movie-page/${movie.imdbid}`}>
        <img className='page-img' src={movie.poster} alt={`Poster of ${movie.title}`} />
        <h3 className='page-smallHeading'>{movie.title}</h3>
      </Link>
      <div className="page-modal">
        <button className='page-button' onClick={() => openModal(movie)}>Watch Trailer</button>
      </div>
    </div>
    </div>
  );
}

export default PageCard;
