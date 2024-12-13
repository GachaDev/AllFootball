import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
	return (
		<div className='login'>
			<form action=''>
				<h1>ALLFOOTBALL</h1>
				<input type='text' placeholder='Usuario' required />
				<input type='password' placeholder='Contraseña' required />
				<button type='submit'>Iniciar Sesión</button>
				<Link to={'/registro'}>¿Has olvidado tu contraseña?</Link>
				<div>
					<hr />
				</div>
				<Link to={'/registro'}>¿No tienes cuenta? Regístrate.</Link>
			</form>
		</div>
	);
}
