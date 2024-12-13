import { Outlet, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<>
			<header>
				<h1>
					<Link to={'/'}>ALLFOOTBALL</Link>
				</h1>
				<div className='routes'>
					<Link to={'/noticias'}>NOTICIAS</Link>
					<Link to={'/contacto'}>CONTACTO</Link>
				</div>
				<div className='search'>
					<input type='text' placeholder='Buscar' />
					<Link to={'/login'}>Iniciar Sesión</Link>
				</div>
			</header>
			<Outlet />
		</>
	);
}
