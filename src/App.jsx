import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initUserStats, initUserData } from '@services/data.js';

import Header from './components/UI/Header';
import Home from './pages/Home';
import Holland from './pages/Holland';
import Cattell from './pages/Cattell';
import Luscher from './pages/Luscher';
import About from './pages/About';
import Service from './pages/Service';
import Methods from './pages/Methods';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

initUserStats();
initUserData();

export default function MyApp() {
	const router = createBrowserRouter(
		[
			{
				path: '/',
				element: <Home />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/holland',
				element: <Holland />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/cattell',
				element: <Cattell />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/luscher',
				element: <Luscher />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/service',
				element: <Service />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/blog',
				element: <Blog />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/pricing',
				element: <Pricing />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/login',
				element: <Login />,
				errorElement: <PageNotFound />,
			},
			{
				path: '/methods',
				element: <Methods />,
				errorElement: <PageNotFound />,
			},
		],
		{
			future: {
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			},
		}
	);

	return (
		<RouterProvider router={router}>
			<Header />
		</RouterProvider>
	);
}
