import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../../store';
import SingelMovieCard from '../../components/singelmoviecard/SingelMovieCard'

function SingleMoviePage({ onMovieClick }) {
  const { imdbId } = useParams();
  const movie = useStore(state => state.movie);

  useEffect(() => {
    onMovieClick(imdbId);
  }, [imdbId]);

  if (!movie) {
    return <div>Loading...</div>;
  }


  return (
    <SingelMovieCard movie={movie} />
  );
}

export default SingleMoviePage;