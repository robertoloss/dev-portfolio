import { CgWebsite } from "react-icons/cg"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6"
import { IconContext } from "react-icons/lib"

type Props = {
	type: 'web' | 'git',
	link: string
}
export default function WGIcon({ type, link } : Props) {
	return (
		<Link className="cursor-pointer" to={link || ''} target="_blank"> 
			<IconContext.Provider value={{ className: 'hover:text-[#c2af1d] animate transition-all ' }}>			
				{type === 'web' && <CgWebsite size={40}  />}
				{type === 'git' && <FaGithub size={40}  />}
			</IconContext.Provider>
		</Link>
	)
}
