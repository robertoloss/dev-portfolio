import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
//import { sidebarButtons } from "@/utils/sidebar-menu"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { sidebarButtons } from "@/utils/sidebar-menu";

type Props = {
	drawer: boolean,
	drawerHandler: ()=>void
}


export default function Header({ drawer, drawerHandler } : Props) {
	const [shadow, setShadow] = useState(false)	

	useEffect(()=>{
    const scroll = () => {
      if (window.scrollY > 20) setShadow(true)
			else setShadow(false)
    }
    window.addEventListener("scroll", scroll, false);
    return  () => window.removeEventListener("scroll", scroll, false);
  },[])

	useEffect(()=>{
		if (drawer) document.body.classList.add('overflow-hidden')
		else document.body.classList.remove('overflow-hidden')
	},[drawer])

	return (
			<div className={`flex flex-row p-4 sticky top-0 left-0 w-full h-14  sm:hidden
				${shadow ? 'border-b border-muted' : ''} bg-background ${drawer ? 'opacity-100' : 'opacity-80'} z-40
				justify-end `}>
				<div className="cursor-pointer" onClick={drawerHandler}>
					<RxHamburgerMenu size="32px"/>
				</div>
			{drawer && 
				<div className="flex flex-col absolute  top-0 left-0 p-4 w-screen h-screen bg-background z-50">
					<div className="cursor-pointer self-end" onClick={drawerHandler}>
						<IoCloseOutline size='32px'/>
					</div>
					<div className="flex flex-col ">
						{sidebarButtons.map((button: typeof sidebarButtons[0],index: number) => 
							<Link key={index} to={button.link} onClick={drawerHandler}>
								{button.label}
							</Link>
						)}
					</div>
				</div>
			}
			</div>

	)
}
