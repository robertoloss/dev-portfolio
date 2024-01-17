import { Link } from "react-router-dom"
import { sidebarButtons } from "@/utils/sidebar-menu";
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


	return (
		<div className={`flex flex-row 
			w-full h-full`}>
				<div className={`flex flex-col w-full h-full overflow-hidden border-r-[1px]`}>
					<div className="flex flex-col w-full h-full pl-10 pt-12">
						<div className="flex flex-col gap-y-8">
							<ThemeToggle />
							<div className="flex flex-col gap-y-2">
								{sidebarButtons.map((button,index) => 
									<Link key={index} to={button.link} className="text-lg hover:ml-2 hover:underline 
									transition-all duration-100 ease-linear">
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
							<div className="h-[16px] rounded-full border w-fit border-muted" />
						</div>
						}
					{close && <FaChevronRight /> }
				</div>
			</div>
		</div>
	)
}
