import ThemeToggle from "./ThemeToggle"
import { Link } from "react-router-dom"
import { sidebarButtons } from "@/utils/sidebar-menu"
import { IoCloseOutline } from "react-icons/io5"

type Props = {
	drawerHandler: (slug: string)=>void,
}

export default function Drawer({ drawerHandler } : Props) {
	
	return (
		<div className="flex flex-col absolute  top-0 left-0 p-4 w-screen h-screen bg-background z-50">
			<div className="cursor-pointer self-end" onClick={()=>drawerHandler('toggle')}>
				<IoCloseOutline size='32px'/>
			</div>
			<div className="flex flex-col mt-8 ml-14 gap-y-14">
				<ThemeToggle/>
				<div className="flex flex-col gap-y-6">
					{sidebarButtons.map((button: typeof sidebarButtons[0],index: number) => 
						<Link
							className="text-2xl w-fit hover:text-[#ef4444] transition-[color] duration-500"
							key={index} to={button.link} 
							onClick={()=>drawerHandler(button.link)}
						>
							{button.label}
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
