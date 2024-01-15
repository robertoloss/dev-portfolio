import { getAllProjects } from "../sanity/client"
import { Project } from "../sanity/sanity-types"
import { useEffect, useState } from "react"


export default function Home() {
	const [projects, setProjects] = useState<Project[] | null>(null)

	useEffect(()=>{
		(async ()=>{
			const data = await getAllProjects();
			setProjects(data);
		})() 
	},[])
	projects && console.log(projects)

  return (
    <div className="flex flex-col">
			{projects && projects.map((project, key)=>
					<h1 key={key}>{project.name}</h1>
				) 
			}
    </div>
  )
}

