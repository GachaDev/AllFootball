import { IoFootball } from 'react-icons/io5';
import { TbShoe } from 'react-icons/tb';

export default function GolHome({ gol }) {
	return (
		<div className='gol golHome'>
			<div>
				<img src={gol.anotador.image} alt={gol.anotador.name} />
				<div className='anotadores'>
					<div>
						<span>{gol.anotador.name}</span>
						<IoFootball size={20} />
					</div>
					{gol.asistente ? (
						<div>
							<span>{gol.asistente.name}</span>
							<TbShoe size={20} />
						</div>
					) : null}
				</div>
			</div>
			<span className='time'>{gol.time}'</span>
			<div></div>
		</div>
	);
}
