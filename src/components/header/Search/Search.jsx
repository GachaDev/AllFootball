import { Link } from 'react-router-dom';

export default function Search({ className }) {
	return (
		<div className={className}>
			<input type='text' placeholder='Buscar' />
			<Link to={'/login'}>Iniciar Sesión</Link>
		</div>
	);
}
