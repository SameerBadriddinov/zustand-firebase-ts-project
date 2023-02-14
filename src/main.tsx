import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Hero from './page/hero';
import Auth from './page/auth';
import { AuthProvider } from './context/app.context';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Hero />,
	},
	{
		path: '/auth',
		element: <Auth />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
