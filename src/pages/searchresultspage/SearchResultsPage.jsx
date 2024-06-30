import './searchresultspage.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../store';
import banner from '../../assets/banner.png';
import bannerFull from '../../assets/banner-full.png'
import brokenHeart from '../../assets/broken-heart.png';
import heart from '../../assets/heart.png';


function SearchResultsPage() {
    const [watchlists, setWatchlists] = useState({});
    const [favorites, setFavorites] = useState({});
    
    const searchResults = useStore(state => state.searchResults); 
    const addToWatchlist = useStore(state => state.addToWatchlist);
    const addToFavorites = useStore(state => state.addToFavoritelist); 

    if (!searchResults) {
        return <div>Loading...</div>;
    } else if (searchResults.length === 0) {
        return <div>No results found</div>;
    }

    const toggleWatchlist = (movie) => {
        const updatedWatchlists = { ...watchlists };
        updatedWatchlists[movie.imdbID] = !updatedWatchlists[movie.imdbID];
        setWatchlists(updatedWatchlists);
        addToWatchlist(movie);
    };

    const toggleFavorite = (movie) => {
        const updatedFavorites = { ...favorites };
        updatedFavorites[movie.imdbID] = !updatedFavorites[movie.imdbID];
        setFavorites(updatedFavorites);
        addToFavorites(movie);
    };



    return (
        <div className="search-results">
            <h2 className='searchlist__title'>Searchresults for</h2>
            <div className="movie-list">
                {searchResults.map(movie => (
                    <div key={movie.imdbID} className="movie-card">
                        <Link className="movie-link" to={`/single-movie-page/${movie.imdbID}`}>
                            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                            <h3 className="movie-title">{movie.Title}</h3>
                            <p className="movie-year">{movie.Year}</p>
                        </Link>
                        <article className='search-logo__container'>
                            <img
                                className='searchPage-logo'
                                src={watchlists[movie.imdbID] ? bannerFull : banner} 
                                onClick={() => toggleWatchlist(movie)}
                                alt={watchlists[movie.imdbID] ? "Banner" : "Banner-full"}
                            />
                            <img
                                className='searchPage-logo'
                                src={favorites[movie.imdbID] ? heart : brokenHeart} 
                                onClick={() => toggleFavorite(movie)}
                                alt={favorites[movie.imdbID] ? "Heart" : "Broken-heart"}
                            />
                        </article>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResultsPage;