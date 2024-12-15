export default function Match({ match }) {
	return (
		<div className='match'>
			<h2>Jornada {match.matchday}</h2>
			<div className='teams'>
				<div className='team teamHome'>
					<h3>{match.homeTeam.shortName}</h3>
					<img alt={match.homeTeam.name} src={match.homeTeam.crest} />
				</div>
				<span>
					{match.score.fullTime.home
						? `${match.score.fullTime.home} - ${match.score.fullTime.away}`
						: new Date(match.utcDate).toLocaleTimeString('es-ES', {
								hour: '2-digit',
								minute: '2-digit'
						  })}
				</span>
				<div className='team teamAway'>
					<img src={match.awayTeam.crest} alt={match.awayTeam.name} />
					<h3>{match.awayTeam.shortName}</h3>
				</div>
			</div>
			<div className='television'>
				<span>Televisado en: DAZN</span>
			</div>
		</div>
	);
}
