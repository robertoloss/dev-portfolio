import { useEffect } from "react"
import Drawer from "./Drawer";
import { RxHamburgerMenu } from "react-icons/rx";

type Props = {
	drawer: boolean,
	drawerHandler: ()=>void,
	shadow: boolean
}

export default function Header({ drawer, drawerHandler, shadow } : Props) {

	useEffect(()=>{
		if (drawer) document.body.classList.add('overflow-hidden')
		else document.body.classList.remove('overflow-hidden')
	},[drawer])

	return (
			<div className={`flex flex-row p-4 fixed top-0 left-0 w-full h-16  md:hidden
				${shadow ? 'border-b border-muted' : ''} bg-background/80 z-40 justify-end`}>
				<div className="cursor-pointer" onClick={drawerHandler}>
					<RxHamburgerMenu size="32px"/>
				</div>
				{drawer && <Drawer drawerHandler={drawerHandler}/>}
			</div>
	)
}
