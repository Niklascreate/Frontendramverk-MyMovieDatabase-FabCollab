// api nyckel : be1d2151

import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import axios from 'axios';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleSearch = () => {
        const apiKey = 'be1d2151';
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchTerm)}`;
    
        axios.get(url)
            .then(response => {
                if (response.data.Search) {
                    setSearchResults(response.data.Search);
                    setShowDropdown(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleSelectMovie = (movie) => {
        setSearchTerm(movie.Title);
        setShowDropdown(false);
    };




    return (
        <header className='header'>
            <section className='header-title'>
                <h1>Fab Collab Movie Database</h1>
                <p>Movies for Everyone</p>
            </section>
            <section className='header-search'>
                <label htmlFor="searchInput" className='header-label'></label>
                <input
                    className="searchInput"
                    type="text"
                    placeholder="Skriv här..."
                    value={searchTerm}
                    onChange={e => {
                        setSearchTerm(e.target.value);
                        setShowDropdown(false);
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <button className='search-button' onClick={handleSearch}>Sök</button>


              {/* Dropdown */}
{showDropdown && (
    <div ref={dropdownRef} className="search-dropdown">
        {searchResults.slice(0, 8).map(movie => (
            <div
                key={movie.imdbID}
                className="movie-card"
                onClick={() => handleSelectMovie(movie)}
            >
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                <div className="movie-info">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            </div>
        ))}
    </div>
    
)}
</section>





            <section className='header-buttons'>
                <button className='watchlist'>WatchList</button>
                <button className='favorit'>Favorit</button>
            </section>
        </header>
    );
}

export default Header;
