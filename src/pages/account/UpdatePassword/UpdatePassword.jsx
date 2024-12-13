export default function UpdatePassword() {
	return (
		<section>
			<form action="">
				<h1>Actualizar Contraseña</h1>
				<input
					type="password"
					placeholder="Antigua Contraseña"
					required
				/>
				<input
					type="password"
					placeholder="Nueva Contraseña"
					required
				/>
				<input
					type="password"
					placeholder="Confirmar Contraseña"
					required
				/>
				<button>Actualizar Contraseña</button>
			</form>
		</section>
	);
}
