import { Picture } from "@/sanity-types"
import { Link } from "react-router-dom"
import { urlFor } from "@/sanity/client"
import SanitySVG from "./SanitySVG"


type Props = {
	index: number,
	icon: Picture,
	card?: true
}
export default function Icon({ icon, index, card } : Props) {

	return (
		<div className="flex relative group/inner" key={index}>
			<Link to={icon.url!} target="_blank" className="z-20">
				<div className={`sm:w-9 sm:h-9  w-9 h-9 p-2 rounded-full group-hover/inner:-mt-[4px] z-10 
					transition-[margin] duration-100 ease-linear cursor-pointer 
					${!card && (icon.name === 'rust' || icon.name === 'react-router') ? 
					' dark:bg-gray-800' : ''}
					${icon.name == 'bubble' || icon.name == 'rust' || icon.name == 'express' 
						? !card 
							? 'bg-background dark:bg-gray-600' 
							: 'bg-border dark:bg-gray-400' 
						: card 
							? 'dark:bg-muted bg-border' 
							: 'bg-background'
						}
					`}
				>
						{icon.name?.toLowerCase() != 'sanity' && 
							<img alt={icon.alt!} src={urlFor(icon.image!)!.width(32).url()} />}
						{icon.name?.toLowerCase() === 'sanity' && <SanitySVG />}
				</div>
			</Link>
			<div 
				className={`flex sm:block sm:w-[34px] sm:h-[34px] absolute top-[1px] left-[1px] 
				rounded-full bg-foreground group-hover:bg-foreground`}
			/>
		</div>
	)
}
