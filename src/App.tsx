import { RouterProvider, createBrowserRouter, RouteObject } from "react-router-dom"
import Palette from "./pages/Palette"
import Root from "./pages/Root"
import About from "./pages/About"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import { getWebsiteInfo, getAllProjects } from "./sanity/client"
import { getCV } from "./sanity/client"

function App() {

	const routerArray = [
		{
			path: '/',
			element: <Root/>,
			loader: async () => { return null },
			children: [
				{
					element: <Home/>,
					index: true,
					loader: async () => { 
						const info = await getWebsiteInfo()
						const projects = await getAllProjects()
						return [ info[0], projects ]
					},
				},
				{
					path: '/contact',
					element: <Contact/>,
					loader: async () => { return null },
				},
				{
					path: '/about',
					element: <About/>,
					loader: async () => { 
						const website = await getWebsiteInfo()
						const cv = await getCV()
						return [website[0],cv[0]] 
					},
				},
				{
					path: '/project/:p',
					element: <Project/>,
					loader: async () => { return null },
				},
				{
					path: '/palette',
					element: <Palette/>,
				}
			]
		}
	]

	const router = createBrowserRouter(routerArray as RouteObject[])
	
  return (
			<RouterProvider 
				router={router} 
				fallbackElement={<div></div>}
			/>
  )
}

export default App
