import Card from "@/components/Card";
import { useLoaderData } from "react-router-dom";
import Hero from "@/components/Hero";
import { Project, Website } from "@/sanity-types";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimationWrapper from "@/components/AnimationWrapper";
import { usePage } from "@/utils/usePage";


export default function Home() {
	const [ websiteInfo, projects] = useLoaderData() as [ Website, Project[] ]
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

	//console.log(projects)
	
	const sections = [
		{
			title: 'Recent Projects',
			name: 'recent'
		},
		{
			title: 'Other Stuff',
			name: 'other',
			description: 'Side projects, studies, and experiments...'
		},
		{
			title: 'A Blast from the Past',
			name: 'past',
			description: `We all have to start somewhere, right?`
		},
	]

  return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<div className="flex flex-col  w-full pb-8 md:py-8 md:pr-6 gap-y-8 ">
					<Hero websiteInfo={websiteInfo}/>
					{sections.map((section, i)=>
						<div key={i} className="flex flex-col gap-y-8">
							{projects.filter(project => project.section! === section.name).length > 0 &&
								<div>
									<h1 className="text-2xl md:mt-10">{section.title}</h1>
									<h1 className="text-lg text-muted-foreground">{section.description}</h1>
								</div>
							}
							{projects
								.filter(project => project.section! === section.name)
								.sort((a,b) => a.order! > b.order! ? 1 : -1)
								.map((project, j) => 
									<Card project={project} websiteInfo={websiteInfo} key={j}/>
							)}
						</div>
					)}
					<div className="h-[200px]" />
				</div>
			</AnimationWrapper>
		</div>
  )
}

