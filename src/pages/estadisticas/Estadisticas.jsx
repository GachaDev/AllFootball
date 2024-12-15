import { useState } from 'react';
import './Estadisticas.css';
import matchesData from '../../assets/matches.json';
import Match from '../../components/match/Match';
import GolHome from '../../components/gol/GolHome';
import GolAway from '../../components/gol/GolAway';
import CambioAway from '../../components/cambio/CambioAway';
import CambioHome from '../../components/cambio/CambioHome';

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

	const [cambios, setCambios] = useState([
		{
			team: 'away',
			time: 80,
			jugadores: {
				enter: {
					name: 'Álvaro Rodríguez',
					image: 'https://www.zerozero.pt/img/jogadores/new/59/35/915935_alvaro_rodriguez_20241123192730.png'
				},
				exit: {
					name: 'Borja Mayoral'
				}
			}
		},
		{
			team: 'home',
			time: 85,
			jugadores: {
				enter: {
					name: 'Julian Alvarez',
					image: 'https://www.ceroacero.es/img/jogadores/new/57/80/675780_julian_alvarez_20240909211227.png'
				},
				exit: {
					name: 'Antoine Griezmann'
				}
			}
		}
	]);

	const [valorPosesion, setValorPosesion] = useState(70);
	const [totalFuerasJuego, setTotalFuerasJuego] = useState({
		home: 1,
		away: 5
	});
	const [saquesDeEsquina, setSaquesDeEsquina] = useState({
		home: 8,
		away: 2
	});

	const totalFuerasDeJuego = totalFuerasJuego.home + totalFuerasJuego.away;
	const porcentajeHome = totalFuerasDeJuego
		? (totalFuerasJuego.home / totalFuerasDeJuego) * 100
		: 0;

	const totalSaquesDeEsquina = saquesDeEsquina.home + saquesDeEsquina.away;
	const porcentajeSaquesDeEsquina = totalSaquesDeEsquina
		? (saquesDeEsquina.home / totalSaquesDeEsquina) * 100
		: 0;

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
						{cambios.map((cambio, index) =>
							cambio.team === 'home' ? (
								<CambioHome cambio={cambio} key={index} />
							) : (
								<CambioAway cambio={cambio} key={index} />
							)
						)}
					</section>
				</div>
				<div className='estadistica'>
					<section>
						<h1>Estadísticas del partido</h1>
						<div className='estadisticaTeams'>
							<div className='puntuacion'>
								<span>{valorPosesion}%</span>
								<span>Posesión</span>
								<span>{100 - valorPosesion}%</span>
							</div>
							<div className='barra'>
								<div
									className='barra-llenado'
									style={{ width: `${valorPosesion}%` }}
								></div>
							</div>
						</div>
						<div className='estadisticaTeams'>
							<div className='puntuacion'>
								<span>{totalFuerasJuego.home}</span>
								<span>Fueras de juego</span>
								<span>{totalFuerasJuego.away}</span>
							</div>
							<div className='barra'>
								<div
									className='barra-llenado'
									style={{ width: `${porcentajeHome}%` }}
								></div>
							</div>
						</div>
						<div className='estadisticaTeams'>
							<div className='puntuacion'>
								<span>{saquesDeEsquina.home}</span>
								<span>Saques de esquina</span>
								<span>{saquesDeEsquina.away}</span>
							</div>
							<div className='barra'>
								<div
									className='barra-llenado'
									style={{ width: `${porcentajeSaquesDeEsquina}%` }}
								></div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
