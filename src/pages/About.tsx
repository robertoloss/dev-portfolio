import { PortableText, PortableTextComponents } from "@portabletext/react"
import { useEffect } from "react"
import AnimationWrapper from "@/components/AnimationWrapper"
import { Website } from "@/sanity/sanity-types"
import { useLoaderData, useLocation } from "react-router-dom"
import { usePage } from "@/utils/usePage"

const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-lg font-thin leading-7">{children}</h1>,
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
	const website = useLoaderData() as Website
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

  return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<div className="flex flex-col w-full pb-8 md:py-8 md:pr-6 gap-y-8">
					<div className="flex flex-col w-full max-w-[1000px] gap-y-4">
						<h1 className="text-4xl font-thin"> About me </h1>
						<PortableText components={components} value={website.about_description!}/>
					</div>
				</div>
			</AnimationWrapper>
		</div>
	)
}
