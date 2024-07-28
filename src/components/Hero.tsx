import LinkedInGithub from "./card-components/LinkedInGitHub"
import { Picture, Website } from "@/sanity-types"
import { PortableText, PortableTextComponents } from "@portabletext/react"
import Icon from "./Icon"

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
		bullet: ({children}) => <ul className="text-lg font-extralight leading-7">{children}</ul>
	},
	listItem: {
		bullet: ({children}) => <li className="mb-8 md:mb-0">{children}</li>
	}
}

type Props = {
	websiteInfo: Website
}
export default function Hero({ websiteInfo } : Props) {
	const icons = websiteInfo?.icons as unknown as any[]

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
			<div className="flex py-2 flex-row gap-x-1 md:gap-x-2 group -ml-2 :md:ml-0 overflow-scroll sm:overflow-auto">
				{websiteInfo && icons
					.filter(i=>(i.name!='rust' && i.name!='python' && i.name != 'cpp'))
					.map((icon, index) => 
						<Icon icon={icon} index={index} /> 
				)}
				{<p className="flex-row h-fit self-end text-muted-foreground"></p>}
			</div>
			<div className="max-w-[1200px]">
				{websiteInfo && <PortableText components={components} value={websiteInfo.description!} />}
			</div>
		</div>
	)
}
