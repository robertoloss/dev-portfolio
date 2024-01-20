import { Project } from "@/sanity/sanity-types"
import { Link } from "react-router-dom"
import { CgWebsite } from "react-icons/cg"
import { FaGithub } from "react-icons/fa6"

type Props = {
	project: Project
}

export default function WebAndGit({ project } : Props) {

	return (
		<div className="flex flex-row gap-4 w-fit">
			<Link className="cursor-pointer" to={project.website || ''} target="_blank"> 
				<CgWebsite size={40}/>
			</Link>
			<Link to={project.github || ''} className="cursor-ponter" target="_blank"> 
				<FaGithub size={40}/>
			</Link>
		</div>
	) 
}
