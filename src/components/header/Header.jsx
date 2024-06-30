import Buttons from "../buttons/Buttons";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import './header.css'


function Header() {
    return (
        <header className='header'>
            <Logo />
            <Search />
            <Buttons />
        </header>
    );

}

export default Header;