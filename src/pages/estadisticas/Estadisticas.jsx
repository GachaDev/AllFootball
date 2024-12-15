import { useState } from 'react';
import './Estadisticas.css';
import matchesData from '../../assets/matches.json';
import Match from '../../components/match/Match';
import GolHome from '../../components/gol/GolHome';
import GolAway from '../../components/gol/GolAway';

export default function Estadisticas() {
	const [goles, setGoles] = useState([
		{
			team: 'away',
			time: 12,
			anotador: {
				name: 'Borja Mayoral',
				image: 'https://www.zerozero.pt/img/jogadores/new/34/87/423487_borja_mayoral_20241123192831.png'
			},
			asistente: {
				name: 'Mauro Arambarri'
			}
		},
		{
			team: 'home',
			time: 24,
			anotador: {
				name: 'Antoine Griezmann',
				image: 'https://www.zerozero.pt/img/jogadores/new/50/90/115090_antoine_griezmann_20240909211038.png'
			},
			asistente: {
				name: 'Koke Resurrección'
			}
		},
		{
			team: 'home',
			time: 74,
			anotador: {
				name: 'Antoine Griezmann',
				image: 'https://www.zerozero.pt/img/jogadores/new/50/90/115090_antoine_griezmann_20240909211038.png'
			},
			asistente: null
		}
	]);

	return (
		<div className='estadisticas'>
			<Match match={matchesData[0]} />
			<div className='infoEstadisticas'>
				<div className='estadistica'>
					<section>
						<h1>Goles</h1>
						{goles.map((gol, index) =>
							gol.team === 'home' ? (
								<GolHome gol={gol} key={index} />
							) : (
								<GolAway gol={gol} key={index} />
							)
						)}
					</section>
					<section>
						<h1>Cambios</h1>
					</section>
				</div>
				<div className='estadistica'>
					<section>
						<h1>Estadísticas del partido</h1>
					</section>
				</div>
			</div>
		</div>
	);
}
