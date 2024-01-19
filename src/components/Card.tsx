import { Project, Website } from "@/sanity/sanity-types"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { PortableTextComponents, PortableText } from "@portabletext/react";
import { Link } from "react-router-dom";
import { urlFor } from "@/sanity/client";
import SanitySVG from "./SanitySVG";

const components : PortableTextComponents = {
	block: {
		normal: ({ children }) => <h1 className="text-lg font-thin leading-7">{ children }</h1>
	}
}

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
		<div className="max-w-[800px]">
			<h1 className="text-xl font-semibold">{project.name}</h1>
			<PortableText components={components} value={project.description!} />
			<div className="flex flex-row gap-4">
				<Link className="cursoer-pointer" to={project.website || ''} target="_blank"> 
					<CgWebsite size={24}/>
				</Link>
				<Link to={project.github || ''} className="cursor-ponter" target="_blank"> 
					<FaGithub size={24}/>
				</Link>
			</div>
			<img src={stackUrl} className="h-6 w-6"/>
			<div className="flex flex-row">
				{urlArray && urlArray.map((url: string, index : number) => 
					{if (index != 4) { 
						return (
						<img 
								src={url}
								className={`h-8 w-8 p-1  ${index === 2 ? 'dark:bg-gray-800 rounded-full' : '' }`} 
								key={index}
							/>
						)
					} else return (
					<div className="h-8 w-8 p-1">
						<SanitySVG />
					</div>
					)
				}
				)}
			</div>
			<div className="max-w-[400px] max-h-[400px] ml-10">
				<Carousel>
					<CarouselPrevious />
					<CarouselContent>
						{project.carousel && project.carousel.map((pic,index)=>
							<CarouselItem>
								<img className="h-full object-cover" src={urlFor(pic.image)?.width(1200).url()} key={index}/>
							</CarouselItem>	
						)}
					</CarouselContent>
					<CarouselNext />
				</Carousel>
			</div>
			
		</div>
	)
}
