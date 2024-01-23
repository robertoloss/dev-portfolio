import { useEffect } from "react"
import Drawer from "./Drawer";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxReload } from "react-icons/rx";
import { useState } from "react";

type Props = {
	drawer: boolean,
	drawerHandler: (s: string)=>void,
	shadow: boolean
}

export default function Header({ drawer, drawerHandler, shadow } : Props) {
	const [reload, setReload] = useState(false)
	useEffect(()=>{
		if (drawer) document.body.classList.add('overflow-hidden')
		else document.body.classList.remove('overflow-hidden')
	},[drawer])

	function clickHandler() {
		window.location.reload()
		setReload(true)
	}

	return (
			<div className={`flex flex-row p-4 fixed top-0 left-0 w-full h-16  md:hidden
				${shadow ? 'border-b border-muted' : ''} bg-background/80 z-40 justify-between`}>
				<div 
					className={`cursor-pointer ${reload ? 'animate-spin' : ''}`} 
					onClick={clickHandler}
				>
					<RxReload size="32px" className={` ${reload ? 'text-destructive' : 'text-muted'}`}/>
				</div>
				<div className="cursor-pointer" onClick={()=>drawerHandler('toggle')}>
					<RxHamburgerMenu size="32px"/>
				</div>
				{drawer && <Drawer drawerHandler={drawerHandler}/>}
			</div>
	)
}
