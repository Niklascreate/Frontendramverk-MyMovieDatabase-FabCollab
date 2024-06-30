import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../store'; 
import './search.css'

function Search() {
    const { searchMovies } = useStore(state => ({
        searchMovies: state.searchMovies
    }));
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            searchMovies(searchTerm);
            const queryUrl = `/search-results?query=${encodeURIComponent(searchTerm)}`;
            navigate(queryUrl);
        }
    };

    return (
        <section className='header-search'>
            <input
                className="searchInput"
                type="text"
                placeholder="Skriv här..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // Förhindrar att formuläret skickas
                        handleSearch();
                    }
                }}
            />
            <button className='search-button' onClick={handleSearch}>Sök</button>
        </section>
    );
}

export default Search;