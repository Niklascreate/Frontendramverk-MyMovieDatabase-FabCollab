import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';
import Modal from '../../components/modal/Modal';

function HomePage() {
    const [movies, setMovies] = useState([]); 
    const [selectedMovie, setSelectedMovie] = useState(null); 

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/movies.json')
          .then(response => {
            const moviesData = response.data;
            if (moviesData) {
                const randomMovies = moviesData.sort(() => Math.random() - 0.5).slice(0, 4);
                setMovies(randomMovies);
            }
        })
        .catch(error => console.log(error));
    }, []);

    const openModal = (movie) => {
        setSelectedMovie(movie);
        console.log("Öppnar modal för:", movie.title);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };
     
     console.log("Renderar filmer:", movies);
     return (
        <>
            <h1 className='homePage-heading'>FAB COLLAB MOVIE TIPS!</h1>
            <div className="homePage-container">
            {movies.map(movie => (
                <div className='homePage-card' key={movie.imdbid}> 
                    
                    <img className='homePage-img' src={movie.poster} alt={`Poster of ${movie.title}`} />
                    <h3 className='homePage-smallHeading'>{movie.title}</h3>
                    <div className="homePage-modal">
                        <button className='homePage-button' onClick={() => openModal(movie)}>Watch Trailer</button>
                    </div>
                </div>
            ))}
            </div>
            <Modal movie={selectedMovie} isOpen={!!selectedMovie} closeModal={closeModal} />
        </>
    );
}

export default HomePage;