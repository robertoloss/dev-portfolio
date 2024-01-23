import { Project, Website } from "@/sanity/sanity-types"
import WebAndGit from "./card-components/WebAndGit";
import Stack from "./card-components/Stack";
import ImgCarousel from "./card-components/ImgCarousel";
import NameAndDescription from "./card-components/NameAndDescription";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

type Props = {
	project: Project
	websiteInfo: Website
}

export default function Card({ project, websiteInfo } : Props) {
	const [cardHover, setCardHover] = useState(false)
	const { ref, inView } = useInView({
		triggerOnce: true
	})

	
	return (
		<div className="overflow-hidden -ml-8 -mr-8 md:overflow-visible md:ml-0 md:mr-0">
		<div className={`relative ${inView ? 'opacity-1 -left-8 md:left-0' : 'opacity-0 left-20'} 
			transition-all duration-1000`}>
		<div
			className={`
				md:grid flex flex-col self-center md:self-start 
				md:grid-cols-[repeat(auto-fit,minmax(344px,1fr))]
				gap-x-6 gap-y-4 md:gap-y-20 max-w-[1200px] py-10 pl-10 pr-[80px] w-[calc(100%+64px)] md:mx-0
				md:w-full justify-between md:rounded-xl border border-muted bg-muted 
				md:hover:scale-[100%] 
			`}
			onMouseEnter={()=>setCardHover(true)}
			onMouseLeave={()=>setCardHover(false)}
			ref={ref}
		>
			<div className="flex flex-col relative justify-between gap-y-6 px-6 md:px-0">
				<div className="flex flex-col gap-y-4">
					<NameAndDescription project={project} cardHover={cardHover}/>
					<WebAndGit project={project} />
				</div>
				<Stack project={project} websiteInfo={websiteInfo} />
			</div>
			<ImgCarousel project={project} />
		</div>
		</div>
		</div>
		)
}
