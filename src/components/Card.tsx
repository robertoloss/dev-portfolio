//import { Project, Website } from "@/sanity/sanity-types"
import { Project, Website } from "../sanity-types";
import WebAndGit from "./card-components/WebAndGit";
import Stack from "./card-components/Stack";
import ImgCarousel from "./card-components/ImgCarousel";
import NameAndDescription from "./card-components/NameAndDescription";

type Props = {
	project: Project
	websiteInfo: Website
}

export default function Card({ project, websiteInfo } : Props) {

	return (
		<div
			className={`
				md:grid flex flex-col self-center md:self-start 
				md:grid-cols-[repeat(auto-fit,minmax(344px,1fr))]
				gap-x-6 gap-y-4 md:gap-y-20 max-w-[1200px] py-10 pl-10 pr-[80px] w-[calc(100%+64px)] md:mx-0
				md:w-full justify-between md:rounded-xl border-2 border-muted dark:bg-muted bg-border
				md:hover:scale-[100%]
        hover:border-foreground transition-all 
			`}
		>
			<div className="flex flex-col relative justify-between gap-y-6 ">
				<div className="flex flex-col gap-y-4">
					<NameAndDescription project={project}/>
					<WebAndGit project={project} />
				</div>
				<Stack project={project} websiteInfo={websiteInfo} />
			</div>
			<ImgCarousel project={project} />
		</div>
		)
}
