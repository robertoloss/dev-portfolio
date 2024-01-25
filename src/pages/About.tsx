import { PortableText, PortableTextComponents } from "@portabletext/react"
import { useEffect } from "react"
import AnimationWrapper from "@/components/AnimationWrapper"
import { Website } from "@/sanity/sanity-types"
import { useLoaderData, useLocation } from "react-router-dom"
import { usePage } from "@/utils/usePage"
import { CV } from "@/sanity/sanity-types"

const description : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-base font-extralight leading-6 text-muted-foreground">{children}</h1>,
  },
	marks: {
    em: ({children}) => <p className="text-lg font-normal text-destructive leading-6">{children}</p>,
		link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} className="underline">
          {children}
        </a>
      )
    },
	},
}
const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-lg font-extralight leading-7">{children}</h1>,
  },
	marks: {
    em: ({children}) => <p className="text-lg font-normal text-destructive leading-6">{children}</p>,
		link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} className="underline">
          {children}
        </a>
      )
    },
	},
}


export default function About() {
	const [ website, cv ] = useLoaderData() as [Website, CV]
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

  return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<div className="flex flex-col gap-y-6" >
					<div className="flex flex-col w-full pb-8 md:py-8 md:pr-6 gap-y-8">
						<div className="flex flex-col w-full max-w-[1000px] gap-y-4">
							<h1 className="text-4xl font-thin"
									style={{fontFamily: "Fira Code"}}> About me </h1>
							<PortableText components={components} value={website.about_description!}/>
						</div>
					</div>
					<ol className="relative border-s border-muted-foreground"> 
						{cv.cvEntries!
						.sort((entryA, entryB) => entryA!.order! < entryB!.order! ? 1 : -1)
						.map((entry, index) => 
							<li key={index} className="mb-10 ms-4 bg-muted px-6 py-4 rounded-xl max-w-[1000px]">
								<div className="absolute w-3 h-3 rounded-full mt-1.5 -start-[6.5px]
									border border-white border-muted-foreground bg-muted-foreground"/>
								<time className="mb-1 text-sm font-normal leading-none  text-muted-foreground">
									{entry.date}	
								</time>
								<h3 className="text-xl font-medium ">
									{entry.title}	
								</h3>
								<h2 className="text-base font-normal ">
									{entry.subtitle}	
								</h2>
								<PortableText components={description} value={entry.description!}/> 
							</li>
						)}
					</ol>	
					<div className="flex flex-col h-20" />
				</div>
			</AnimationWrapper>
		</div>
	)
}
