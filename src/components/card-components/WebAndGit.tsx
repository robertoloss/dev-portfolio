import WGIcon from "./WGIcon"
import { Project } from "@/sanity-types"

type Props = {
	project: Project
}

export default function WebAndGit({ project } : Props) {

	return (
		<div className="flex flex-row gap-4 w-fit">
			{project.website && <WGIcon type='web' link={project.website} />}
			{project.github && <WGIcon type='git' link={project.github} />}
		</div>
	) 
}
