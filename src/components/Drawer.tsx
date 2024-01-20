import ThemeToggle from "./ThemeToggle"
import { Link } from "react-router-dom"
import { sidebarButtons } from "@/utils/sidebar-menu"
import { IoCloseOutline } from "react-icons/io5"

type Props = {
	drawerHandler: ()=>void,
}

export default function Drawer({ drawerHandler } : Props) {

	return (
		<div className="flex flex-col absolute  top-0 left-0 p-4 w-screen h-screen bg-background z-50">
			<div className="cursor-pointer self-end" onClick={drawerHandler}>
				<IoCloseOutline size='32px'/>
			</div>
			<div className="flex flex-col ">
				<ThemeToggle/>
				{sidebarButtons.map((button: typeof sidebarButtons[0],index: number) => 
					<Link key={index} to={button.link} onClick={drawerHandler}>
						{button.label}
					</Link>
				)}
			</div>
		</div>
	)
}
