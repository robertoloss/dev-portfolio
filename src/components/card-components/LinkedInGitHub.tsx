import { FaGithub } from "react-icons/fa6"
import { Link } from "react-router-dom"
import linkedin from '../../../public/LinkedIn_icon.svg'


export default function LinkedInGithub() {
	const css = 'flex flex-col relative w-8 h-8 hover:scale-110 transition-[transform] duration-300'
	const links = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/roberto-loss-929a28260/',
			component: <img src={linkedin} className={css}/>
		},
		{
			name: 'Github',
			link: 'https://github.com/robertoloss',
			component: <FaGithub className={css}/>
		},
	]

	return (
		<div className="flex  mt-2 flex-row gap-x-4">
			{links.map((link, index)=>
				<Link key={index} to={link.link} target="_blank">
					{ link.component }
				</Link>
			)}
		</div>
	)
}
