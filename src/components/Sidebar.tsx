import { Link } from "react-router-dom"
import ThemeToggle from "@/components/ThemeToggle"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

type Props = {
	close: boolean,
	closeHandler: ()=>void
}

export default function Sidebar({ close, closeHandler } : Props) {
	const [hover, setHover] = useState(false)
	function hoverHandlerEnter() {
		setHover(true)
	}
	function hoverHandlerLeave() {
		setHover(false)
	}
	const sidebarButtons = [
		{
			link: '/',
			label: 'Home',
		},
		{
			link: '/about',
			label: 'About',
		},
		{
			link: '/contact',
			label: 'Contact',
		},
		{
			link: '/project/test',
			label: 'Projects',
		},
		{
			link: '/palette',
			label: 'Palette',
		},
	]

	console.log("\nclose: ", close)
	console.log("hover: ", hover)

	return (
		<div className={`flex flex-row 
			w-full h-full`}>
				<div className={`flex flex-col w-full h-full overflow-hidden border-r-[1px]`}>
					<div className="flex flex-col w-full h-full pl-10 pt-6">
						<div className="flex flex-col gap-y-4">
							<ThemeToggle />
							<div className="flex flex-col">
								{sidebarButtons.map((button,index) => 
									<Link key={index} to={button.link}>
										{button.label}
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			<div className="flex flex-col w-4 h-full justify-center hover:bg-muted cursor-pointer "
				onClick={closeHandler} onMouseEnter={hoverHandlerEnter} onMouseLeave={hoverHandlerLeave}>
				<div className="w-full cursor-pointer" >
					{(!close && hover) && <FaChevronLeft />}
					{(!close && !hover) && 
						<div className="flex flex-row w-full h-fit max-w-[16px] overflow-hidden justify-center">
							<div className="h-[16px] rounded-full border w-fit border-foreground " />
						</div>
						}
					{close && <FaChevronRight /> }
				</div>
			</div>
		</div>
	)
}
