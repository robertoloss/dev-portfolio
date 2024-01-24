import SanitySVG from "../SanitySVG"
import { urlFor } from "@/sanity/client"
import { Project, Website } from "@/sanity/sanity-types"


type Props = {
	project: Project
	websiteInfo: Website
}
type Icon = NonNullable<Website['icons']>[number]


export default function Stack({ project, websiteInfo } : Props) {
	const stack = project.stack
	const stackIcon = [ ...websiteInfo.icons!
		.filter((icon)=>icon.name === stack)]
	const stackUrl = urlFor(stackIcon[0].image)?.width(32).url()
	const iconArr = project.tech ? [...project.tech] : ['']


	return (
		<div className="flex flex-row items-center gap-x-2">
			<div className={`flex flex-col items-center justify-center
				${stackIcon[0].name === 'bubble' ? 'h-8 w-8 dark:bg-white rounded-full p-1' : ''}`}>
				<img src={stackUrl} className={`h-5 w-5 
					${stackIcon[0].name === 'bubble' ? 'h-4 w-4' : ''}`}
				/>
			</div>
			{<div className="flex flex-row gap-x-2">
				{websiteInfo.icons && 
					websiteInfo.icons!
					.filter(icon=>iconArr.includes(icon.name!))
					.map((icon: Icon, index : number) => 
					{
						if (icon.name != 'sanity') { 
						return (
						<img 
								src={urlFor(icon.image!)!.width(32).url()}
								className={`h-8 w-8 p-1  ${icon.name?.includes('router') ? 'dark:bg-gray-700 rounded-full' : '' }`} 
								key={index}
							/>
						)
					} else return (
							<div className="h-8 w-8 p-1" key={index}>
								<SanitySVG />
							</div>
						)
					}
				)}
			</div>}
		</div>
	)
}
