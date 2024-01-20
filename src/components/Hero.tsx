import { Website } from "@/sanity/sanity-types"
import { urlFor } from "@/sanity/client"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import { Link } from "react-router-dom"
import SanitySVG from "./SanitySVG"

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
	list: {
		bullet: ({children}) => <ul className="text-lg font-thin leading-7">{children}</ul>
	},
	listItem: {
		bullet: ({children}) => <li className="">{children}</li>
	}
}

type Props = {
	websiteInfo: Website
}

export default function Hero({ websiteInfo } : Props) {

	return (<>
		<div className="flex flex-col">
				<h1 className="text-4xl font-thin">Roberto Loss</h1>
				<h1 className="text-lg">Software Developer</h1>
			</div>
			<div className="flex flex-row gap-x-2 group">
				{websiteInfo && websiteInfo.icons!
				.filter(i=>(i.name!='Rust' && i.name!='Python')).map((icon, index) => 
					<div className="flex relative group/inner" key={index}>
						<Link to={icon.url!} target="_blank" className="z-20">
							<div className={`sm:w-10 sm:h-10 w-8 h-8 p-2 rounded-full group-hover/inner:-mt-[8px] z-10 bg-background
								transition-[margin] duration-100 ease-linear cursor-pointer 
								${(icon.name === 'Rust' || icon.name === 'React Router') ? 
								' dark:bg-gray-800' : ''}`}
								>
									{icon.name?.toLowerCase() != 'sanity' && 
										<img alt={icon.alt!} src={urlFor(icon.image!)!.width(40).url()} />}
									{icon.name?.toLowerCase() === 'sanity' && <SanitySVG />}
							</div>
						</Link>
					<div className="flex sm:block sm:w-[38px] sm:h-[38px] absolute top-[1px] left-[1px] 
						rounded-full bg-background group-hover:bg-foreground"/>
					</div>
				)}
				{/*<p className="flex-row h-fit justify-end">...</p>*/}
			</div>
			<div className="max-w-[1200px]">
				{websiteInfo && <PortableText components={components} value={websiteInfo.description!} />}
			</div>
	</>)
}
