import Card from "@/components/Card";
import { useLoaderData } from "react-router-dom";
import { Project, Website } from "../sanity/sanity-types";
import Hero from "@/components/Hero";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimationWrapper from "@/components/AnimationWrapper";
import { usePage } from "@/utils/usePage";


export default function Home() {
	const [ websiteInfo, projects ] = useLoaderData() as [ Website, Project[] ]
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

  return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<div className="flex flex-col w-full pb-8 md:py-8 md:pr-6 gap-y-8">
					<Hero websiteInfo={websiteInfo}/>
					<h1 className="text-2xl md:mt-10">Recent projects</h1>
						{projects.map((project, index) => 
							<Card project={project} websiteInfo={websiteInfo} key={index}/>
						)}
					<h1 className="text-2xl mt-10">Other stuff</h1>
					<h1 className="text-2xl mt-10">A blast from the past!</h1>
				</div>
			</AnimationWrapper>
		</div>
  )
}

