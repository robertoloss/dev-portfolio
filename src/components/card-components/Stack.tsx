import { Picture, Project, Website } from "@/sanity-types"
import Icon from "../Icon"


type Props = {
	project: Project
	websiteInfo: Website
}
type Icon = NonNullable<Website['icons']>[number]


export default function Stack({ project, websiteInfo } : Props) {
	const stack = project.stack
	const stackIcon = [ ...websiteInfo.icons!
		.filter(icon=>(icon as any).name === stack)]
	const iconArr = project.tech ? [...project.tech] : ['']


	return (
		<div className="flex flex-row items-center gap-x-2 h-5">
			<Icon icon={stackIcon[0] as unknown as Picture} index={Math.random()} card={true}/>
			{<div className="flex flex-row gap-x-2">
				{websiteInfo.icons && 
					websiteInfo.icons!
					.filter(icon=>iconArr.includes((icon as any).name!))
					.map((icon: Icon, index : number) => <Icon icon={icon as unknown as Picture} index={index} card={true}/>
				)}
			</div>}
		</div>
	)
}
