import LinkedInGithub from "./card-components/LinkedInGitHub"
import { Website } from "@/sanity-types"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import IconRow from "./IconRow"
import { useState } from "react"

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
		bullet: ({children}) => <ul className="text-lg font-light leading-7">{children}</ul>
	},
	listItem: {
		bullet: ({children}) => <li className="mb-8 md:mb-0">{children}</li>
	}
}

type Props = {
	websiteInfo: Website
}
export default function Hero({ websiteInfo } : Props) {
  const [ isHovered, setIsHovered ] = useState(false)
	const icons = websiteInfo?.icons as unknown as any[]
  const excludedIcons = ['python','cpp' ]
  const includedIcons = icons.filter(i=>(!excludedIcons.includes(i.name)))
  console.log(isHovered)

	return (
		<div className="flex flex-col min-h-screen md:min-h-0 gap-y-10">
			<div className="flex flex-col">
				<h1 className="text-4xl font-thin" style={{fontFamily: "Fira Code"}}>
					Roberto Loss
				</h1>
				<h1 className="text-lg" style={{fontFamily: "Fira Code"}}>
					Software Developer
				</h1>
				<LinkedInGithub />
			</div>
      {websiteInfo && 
        <div 
          className="
            flex flex-row overflow-hidden w-full max-w-[1200px] gap-x-1 md:gap-x-2
          "
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
        >
          <IconRow includedIcons={includedIcons} isHovered={isHovered}/>
          <IconRow includedIcons={includedIcons} isHovered={isHovered}/>
          <IconRow includedIcons={includedIcons} isHovered={isHovered}/>
        </div>
      }
			<div className="max-w-[1200px]">
				{websiteInfo && <PortableText components={components} value={websiteInfo.description!} />}
			</div>
		</div>
	)
}
