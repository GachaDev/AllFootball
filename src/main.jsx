import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header/Header';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Header />}>
					<Route index element={<h1>Home</h1>} />
					<Route path='contacto' element={<h1>Contacto</h1>} />
					<Route path='login' element={<h1>Login</h1>} />
					<Route path='registro' element={<h1>Registro</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
