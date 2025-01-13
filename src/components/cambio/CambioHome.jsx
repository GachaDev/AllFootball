import { MdOutlineChangeCircle } from 'react-icons/md';

export default function CambioHome({ cambio }) {
	return (
		<div className='cambio cambioHome'>
			<div>
				<img
					src={cambio.jugadores.enter.image}
					alt={cambio.jugadores.enter.name}
				/>
				<div className='jugadores'>
					<div>
						<span>{cambio.jugadores.enter.name}</span>
					</div>
					<div>
						<span className='exit'>{cambio.jugadores.exit.name}</span>
					</div>
				</div>
				<MdOutlineChangeCircle size={50} color='green' />
			</div>
			<span className='time'>{cambio.time}'</span>
			<div></div>
		</div>
	);
}
