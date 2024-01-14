import { RouterProvider, createBrowserRouter, RouteObject } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Root from "./pages/Root"
import About from "./pages/About"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/Contact"

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
					loader: async () => { return null },
				},
				{
					path: '/contact',
					element: <Contact/>,
					loader: async () => { return null },
				},
				{
					path: '/about',
					element: <About/>,
					loader: async () => { return null },
				},
				{
					path: '/project/:p',
					element: <Project/>,
					loader: async () => { return null },
				}
			]
		}
	]

	const router = createBrowserRouter(routerArray as RouteObject[])
	
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider 
				router={router} 
				fallbackElement={<div></div>}
			/>
    </ThemeProvider>
  )
}

export default App
