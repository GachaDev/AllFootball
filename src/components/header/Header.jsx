import { Outlet, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<>
			<header>
				<h1>
					<Link to={'/'}>ALLFOOTBALL</Link>
				</h1>
				<nav>
					<Link to={'/noticias'}>NOTICIAS</Link>
					<Link to={'/contacto'}>CONTACTO</Link>
				</nav>
				<div className='search'>
					<input type='text' placeholder='Buscar' />
					<Link to={'/login'}>Iniciar Sesión</Link>
				</div>
			</header>
			<Outlet />
		</>
	);
}
