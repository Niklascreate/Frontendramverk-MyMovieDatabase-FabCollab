import './buttons.css';
import { Link } from 'react-router-dom'; 

function Buttons() {
    return (
        <section className='header-buttons'>
            <Link to="/watchlist-page" className='watchlist'>Watchlist</Link>
            <Link to="/favorite-page" className='favorit'>Favorites</Link>
        </section>
    );
}

export default Buttons;