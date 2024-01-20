import { PortableText, PortableTextComponents } from "@portabletext/react"
import { Website } from "@/sanity/sanity-types"
import { useLoaderData } from "react-router-dom"

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
	return (
		<>
			<h1>About</h1>
			<PortableText components={components} value={website.about_description!}/>
		</>
	)
}
