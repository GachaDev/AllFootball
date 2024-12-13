import { Outlet, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<>
			<header>
				<h1>ALLFOOTBALL</h1>
				<div className='routes'>
					<Link to={'/noticias'}>NOTICIAS</Link>
					<Link to={'/contacto'}>CONTACTO</Link>
				</div>
				<div>
					<Link to={'/login'}>LOGIN</Link>
					<Link to={'/registro'}>REGISTRO</Link>
				</div>
			</header>
			<Outlet />
		</>
	);
}
