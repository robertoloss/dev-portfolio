import { CgWebsite } from "react-icons/cg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6"

type Props = {
	type: 'web' | 'git',
	link: string
}

export default function WGIcon({ type, link } : Props) {
	const [hover, setHover] = useState('')

	return (
		<Link 
			className="cursor-pointer"
			to={link || ''}
			target="_blank"
			onMouseEnter={()=>setHover('#ef4444')}
			onMouseLeave={()=>setHover('')}
		> 
			{type === 'web' && <CgWebsite size={40} color={hover} />}
			{type === 'git' && <FaGithub size={40} color={hover} />}
		</Link>
	)
}
