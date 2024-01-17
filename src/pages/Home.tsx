import {  PortableTextComponents, PortableText } from "@portabletext/react";
import { Link, useLoaderData } from "react-router-dom";
import { Website } from "../sanity/sanity-types";
import { urlFor } from "@/sanity/client";

const components : PortableTextComponents = {
  block: {
    normal: ({children}) => <h1 className="text-lg font-thin leading-6">{children}</h1>,
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

export default function Home() {
	const websiteInfo = useLoaderData() as Website


  return (
    <div className="flex flex-col py-8 pr-6 gap-y-8">
			<div className="flex flex-col">
			<h1 className="text-4xl font-thin">Roberto Loss</h1>
			<h1 className="text-lg">Software Developer</h1>
			</div>
			<div className="flex flex-row gap-x-2 ">
				{websiteInfo && websiteInfo.icons!
				.filter(i=>(i.name!='Rust' && i.name!='Python')).map((icon, index) => 
					<div className="flex relative" key={index}>
						<Link to={icon.url!} target="_blank" className="z-20">
							<div className={`sm:w-10 sm:h-10 w-8 h-8 p-2 rounded-full hover:-mt-[4px] z-10 bg-background
								transition-all duration-100 ease-linear cursor-pointer 
								${(icon.name === 'Rust' || icon.name === 'React Router') ? 
								' dark:bg-gray-800' : ''}`}
								>
									<img alt={icon.alt!} src={urlFor(icon.image!)!.width(40).url()} />
							</div>
						</Link>
					<div className="flex sm:block sm:w-[38px] sm:h-[38px] absolute top-[1px] left-[1px] 
						rounded-full bg-foreground"/>
					</div>
				)}
			</div>
			<div className="max-w-[1200px]">
				{websiteInfo && <PortableText components={components} value={websiteInfo.description!} />}
			</div>
		</div>
  )
}

