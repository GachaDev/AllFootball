import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/header/Header';
import NotFound from './pages/notFound/NotFound';
import Contact from './pages/contacto/Contact';
import Login from './pages/login/Login';
import Register from './pages/registro/Register';
import Account from './pages/account/Account';
import Home from './pages/home/Home';
import Search from './pages/search/Search';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Header />}>
					<Route index element={<Home />} />
					<Route path='contacto' element={<Contact />} />
					<Route path='login' element={<Login />} />
					<Route path='registro' element={<Register />} />
					<Route path='cuenta' element={<Account />} />
					<Route path='resultadoBusqueda' element={<Search />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
