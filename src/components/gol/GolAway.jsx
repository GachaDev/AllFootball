import { IoFootball } from 'react-icons/io5';
import { TbShoe } from 'react-icons/tb';

export default function GolAway({ gol }) {
	return (
		<div className='gol golAway'>
			<div></div>
			<span className='time'>{gol.time}'</span>
			<div>
				<div className='anotadores'>
					<div>
						<IoFootball />
						<span>{gol.anotador.name}</span>
					</div>
					{gol.asistente ? (
						<div>
							<TbShoe />
							<span>{gol.asistente.name}</span>
						</div>
					) : null}
				</div>
				<img src={gol.anotador.image} alt={gol.anotador.name} />
			</div>
		</div>
	);
}
