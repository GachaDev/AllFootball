import { useState, useEffect } from 'react';
import matchesData from '../../assets/matches.json';
import Match from '../../components/match/Match';
import { useLocation } from 'react-router-dom';

export default function Search() {
	const [matches, setMatches] = useState(matchesData);

	const [query, setQuery] = useState('');
	const location = useLocation();

	const getQueryParam = () => {
		const params = new URLSearchParams(location.search);
		return params.get('result');
	};

	useEffect(() => {
		const queryFromURL = getQueryParam();
		if (queryFromURL) {
			setQuery(queryFromURL);

			console.log('Buscando:', queryFromURL);
		}
	}, [location.search]);

	return (
		<div>
			<div className='competition result'>
				<h1>Resultados de: {query}</h1>
			</div>
			<div className='matches'>
				{matches.map((match, index) => (
					<Match match={match} key={index} />
				))}
			</div>
		</div>
	);
}
