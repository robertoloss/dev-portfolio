import { Project, Website } from "@/sanity/sanity-types"
import WebAndGit from "./card-components/WebAndGit";
import Stack from "./card-components/Stack";
import ImgCarousel from "./card-components/ImgCarousel";
import { urlFor } from "@/sanity/client";
import NameAndDescription from "./card-components/NameAndDescription";

type Props = {
	project: Project
	websiteInfo: Website
}

export default function Card({ project, websiteInfo } : Props) {

	const stackUrl = urlFor(websiteInfo.icons?.filter((icon)=>icon.name!.toLowerCase() === project.stack)[0].image)?.width(24).url()

	function getTechToDisplay() {
		const tech = project.tech!.map((t)=> {
			if (t.includes('-')) {
				const arr = t.split('-')
				const res = arr[0]+' '+arr[1]
				return res
			} else return t
		})
		const urlArray = tech.map((t) => {
			const icon = websiteInfo.icons!.filter(i=>i.name?.toLowerCase() === t)[0]
			const res = urlFor(icon.image)!.width(24).url()
			return res 
		})
		return urlArray
	}
	const urlArray = getTechToDisplay()

	return (
		<div className="md:grid  flex flex-col self-center md:self-start md:grid-cols-[repeat(auto-fit,minmax(344px,1fr))]
			gap-x-6 gap-y-20 max-w-[1200px] py-10 pl-10 pr-[80px] w-[calc(100%+80px)] md:mx-0
			md:w-full justify-between rounded-xl border border-muted bg-muted">
			<div className="flex flex-col relative justify-between gap-y-6">
				<NameAndDescription project={project} />
				<WebAndGit project={project} />
				<Stack urlArray={urlArray} stackUrl={stackUrl} />
			</div>
			<ImgCarousel project={project} />
		</div>
	)
}
