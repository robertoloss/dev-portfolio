import { Project } from "@/sanity/sanity-types"
import { PortableTextComponents, PortableText } from "@portabletext/react"

const components : PortableTextComponents = {
	block: {
		normal: ({ children }) => <h1 className="text-lg font-thin leading-7">{ children }</h1>
	}
}

type Props = {
	project: Project
}

export default function NameAndDescription({ project } : Props) {

	return (
		<div className="flex flex-col gap-y-2 ">
			<h1 className="text-xl font-semibold">{project.name}</h1>
			<div className="flex flex-col">
				<PortableText components={components} value={project.description!} />
			</div>
		</div>
	)
}
