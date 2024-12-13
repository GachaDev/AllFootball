import './Contact.css';

export default function Contact() {
	return (
		<div className='contact'>
			<form>
				<h1>Contacta con nosotros</h1>
				<div>
					<p>
						¿Alguna pregunta o sugerencia? Solo tienes que rellenar el
						formulario para poder enviarnos un mensaje
					</p>
				</div>
				<input
					type='text'
					id='nombre'
					name='nombre'
					placeholder='Nombre'
					required
				/>
				<input
					type='text'
					id='apellidos'
					name='apellidos'
					placeholder='Apellidos'
					required
				/>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Email'
					required
				/>
				<input
					type='tel'
					id='telefono'
					name='telefono'
					placeholder='Teléfono'
					require
				/>
				<textarea
					id='mensaje'
					name='mensaje'
					placeholder='Mensaje'
					required
				></textarea>
				<button type='submit'>Enviar mensaje</button>
			</form>
		</div>
	);
}
