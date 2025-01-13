import { useEffect, useState } from 'react';
import Spain from '../../assets/es.svg';
import matchesData from '../../assets/matches.json';
import Match from '../../components/match/Match';
import './Home.css';

export default function Home() {
	const [matches, setMatches] = useState(matchesData);
	const [dates, setDates] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		const datesObj = [];

		for (let i = 3; i > 0; i--) {
			datesObj.push(new Date(new Date().setDate(new Date().getDate() - i)));
		}

		datesObj.push(new Date());

		setActive(datesObj.length - 1);

		for (let i = 1; i <= 3; i++) {
			datesObj.push(new Date(new Date().setDate(new Date().getDate() + i)));
		}

		setDates(datesObj);
	}, []);

	return (
		<div className='home'>
			<div className='fechas'>
				{dates.map((date, index) => (
					<div
						onClick={() => {
							setActive(index);
						}}
						key={index}
						className={`fecha ${index === active && 'active'}`}
					>
						<h2>
							{date.toDateString() === new Date().toDateString()
								? 'Hoy'
								: date.toLocaleDateString('es-ES', { weekday: 'long' })}
						</h2>
						<h3>
							{date.toLocaleDateString('es-ES', {
								month: 'short',
								day: 'numeric'
							})}
						</h3>
					</div>
				))}
			</div>
			<section className='matchesCompetition'>
				<div className='competition'>
					<img src={Spain} alt='Spain' />
					<h1>Primera División</h1>
				</div>
				<div className='matches'>
					{matches.map((match, index) => (
						<Match match={match} key={index} />
					))}
				</div>
			</section>
		</div>
	);
}
