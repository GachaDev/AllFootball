import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Header.css';
import Search from './Search/Search';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<header>
				<h1>
					<Link to={'/'}>ALLFOOTBALL</Link>
				</h1>
				<button className='menu-toggle' onClick={toggleMenu}>
					☰
				</button>
				<nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
					<Link to={'/noticias'} onClick={toggleMenu}>
						NOTICIAS
					</Link>
					<Link to={'/contacto'} onClick={toggleMenu}>
						CONTACTO
					</Link>
					<Search className={'mobile-search'} />
				</nav>
				<Search className={'search'} />
			</header>
			<Outlet />
		</>
	);
}
