import './logo.css';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <section className='logo-section'>
            <Link to="/" className='header-title'>
                <h1>Fab Collab Movie Database</h1>
                <p>Movies for Everyone</p>
            </Link>
        </section>
    );
}

export default Logo;

