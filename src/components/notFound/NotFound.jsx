import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
	return (
		<div className='notFound'>
			<h1>404</h1>
			<p>Esta página no se encuentra disponible</p>
			<Link to={'/'}>Volver a Inicio</Link>
		</div>
	);
}
