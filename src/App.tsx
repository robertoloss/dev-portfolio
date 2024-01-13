import { ThemeProvider } from "./components/ThemeProvider"
import { ModeToggle } from "./components/ModeToggle"
import { getAllProjects } from "./sanity/client"
import { Project } from "./sanity/sanity-types"
import { useEffect, useState } from "react"


function App() {
	const [projects, setProjects] = useState<Project[] | null>(null)

	useEffect(()=>{
		(async ()=>{
			const data = await getAllProjects();
			setProjects(data);
		})() 
	},[])
	projects && console.log(projects)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<ModeToggle/>
			{projects && projects.map((project, key)=>
					<h1 key={key}>{project.name}</h1>
				) 
			}
    </ThemeProvider>
  )
}

export default App
