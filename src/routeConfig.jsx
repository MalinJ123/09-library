import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Home from "./routes/Home.jsx";
import Toplist from "./routes/Toplist.jsx";
import FindBook from "./routes/FindBook.jsx";
import Favorites from "./routes/Favorites.jsx";
import RegisterCard from "./routes/RegisterCard.jsx";

export const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			 {
			path: '*',
			element: <Home />
		},
		{
			path: 'toplist',
			element: <Toplist />
		},
		{
			path: 'find-book',
			element: <FindBook />
		},
		{
			path: 'favorites',
			element: <Favorites />
		},
		{
			path: 'get-a-card',
			element: <RegisterCard />
		},


		]
	} 
		
])
