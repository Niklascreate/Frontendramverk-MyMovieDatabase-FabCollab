import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './homepage.css';
import Modal from '../../components/modal/Modal';
import HomePageCard from '../../components/pagecard/PageCard';


function HomePage() {
    const [moviesData, setMoviesData] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        axios.get('https://santosnr6.github.io/Data/movies_long.json')
            .then(response => {
                const moviesData = response.data;
                if (moviesData) {
                    const randomMovies = moviesData.sort(() => Math.random() - 0.5).slice(0, 4);
                    setMoviesData(randomMovies);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const openModal = (movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <>
            <h1 className='homePage-heading'>Fab Collab Movie Tips</h1>
            <div className="homePage-container">
                {moviesData.map(movie => (
                    <HomePageCard key={movie.imdbid} movie={movie} openModal={openModal} />
                ))}
            </div>
            <Modal movie={selectedMovie} isOpen={!!selectedMovie} closeModal={closeModal} />
        </>
    );
}

export default HomePage;
