import { Link } from 'react-router-dom';
import '../login/Login.css';

export default function Register() {
	return (
		<div className='login'>
			<form action=''>
				<h1>ALLFOOTBALL</h1>
				<input type='email' placeholder='Email' required />
				<input type='text' placeholder='Usuario' required />
				<input type='password' placeholder='Contraseña' required />
				<input type='password' placeholder='Confirmar Contraseña' required />
				<button type='submit'>Registrarse</button>
				<Link to={'/login'}>¿Ya tienes cuenta? Inicia sesión</Link>
			</form>
		</div>
	);
}
