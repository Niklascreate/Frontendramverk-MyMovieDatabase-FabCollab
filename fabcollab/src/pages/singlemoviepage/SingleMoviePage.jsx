import './singlemoviepage.css';

function SingleMoviePage() {
  return (
    <div className='singlepage-wrapper'>
      <h1 className='movie-info__title'>Movie information</h1>
      <button className='back-btn'>Back</button>
      <img className='movie-img' src="" alt="Filmlogga" />
      <p className='movie-description'> Information om filmen kommer här</p>
  </div>
  )
}

export default SingleMoviePage