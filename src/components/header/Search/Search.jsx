import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Search({ className }) {
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && searchQuery.trim() !== '') {
			navigate(`/resultadoBusqueda?result=${encodeURIComponent(searchQuery)}`);
			setSearchQuery('');
		}
	};

	return (
		<div className={className}>
			<input
				type='text'
				placeholder='Buscar'
				value={searchQuery}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
			/>

			<Link to='/login'>Iniciar Sesión</Link>
		</div>
	);
}
