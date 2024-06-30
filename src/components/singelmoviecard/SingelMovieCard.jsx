import './singelmoviecard.css';
import React, { useState } from 'react';
import useStore from '../../store';
import banner from '../../assets/banner.png';
import bannerFull from '../../assets/banner-full.png'
import brokenHeart from '../../assets/broken-heart.png';
import heart from '../../assets/heart.png';


function SingelMovieCard({ movie }) {
    const addToWatchlist = useStore(state => state.addToWatchlist);
    const addToFavorites = useStore(state => state.addToFavoritelist);
    
    const [watchlisted, setWatchlist] = useState(false); 
    const [favorite, setFavorite] = useState(false); 

    const toggleWatchlist = () => {
        addToWatchlist(movie);
        setWatchlist(!watchlisted); 
    };

    const toggleFavorite = () => {
        addToFavorites(movie);
        setFavorite(!favorite); 
    };

    return (

        <div className="card">
            <div className="card_left">
                <img className='movie-img' src={movie.Poster} alt="Filmlogga" />
            </div>
            <div className="card_right">
                <h1 className='movie-info__title'>{movie.Title}</h1>
                <div className="card_right__details">
                    <ul>
                        <li>Year {movie.Year}</li>
                        <li>{movie.Runtime}</li>
                        <li>{movie.Genre}</li>
                    </ul>
                </div>
                <div className="card_right__plot">
                    <p className='movie-description'>{movie.Plot}</p>
                </div>
                <div className="card_right__logo">
                    <ul className='ul-logo'>
                        <li className='li-logo'>
                        <img
                                className='movie-logo'
                                src={watchlisted ? bannerFull : banner} 
                                onClick={toggleWatchlist}
                                alt={watchlisted ? "Banner" : "Banner-full"}
                            />
                        </li>
                        <li className='li-logo'>
                            <img
                                className='movie-logo'
                                src={favorite ? heart : brokenHeart} 
                                onClick={toggleFavorite}
                                alt={favorite ? "Heart" : "Broken-heart"}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default SingelMovieCard;