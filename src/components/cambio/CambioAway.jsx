import { MdOutlineChangeCircle } from 'react-icons/md';

export default function CambioAway({ cambio }) {
	return (
		<div className='cambio'>
			<div></div>
			<span className='time'>{cambio.time}'</span>
			<div>
				<MdOutlineChangeCircle size={50} color='green' />
				<div className='jugadores'>
					<div>
						<span>{cambio.jugadores.enter.name}</span>
					</div>
					<div>
						<span className='exit'>{cambio.jugadores.exit.name}</span>
					</div>
				</div>
				<img
					src={cambio.jugadores.enter.image}
					alt={cambio.jugadores.enter.name}
				/>
			</div>
		</div>
	);
}
