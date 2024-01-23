import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
//import { useLoaderData } from "react-router-dom";
//import { urlFor } from "@/sanity/client";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage } from "@/utils/usePage";
import useMediaQuery from "@/utils/useMediaQuery";

export default function Root() {
	const [ , setToggle] = useState(false)
	const [close, setClose] = useState(false)
	const [drawer, setDrawer] = useState(false)
	const [shadow, setShadow] = useState(false)	
	const main = useRef<HTMLDivElement | null>(null)
	const { setPageOpen, setMobile } = usePage();

	const location = useLocation().pathname.split('/').slice(-1)[0]

	let timeoutId : ReturnType<typeof setTimeout>;
	const scroll = () => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			const currentPosition = main.current?.scrollTop
			if (currentPosition != undefined) {
				if (currentPosition > 20) setShadow(true)
				else setShadow(false)
			}
		}, 200)
	}

	function drawerHandler(slug: string) {
		if (slug != 'toggle') {
			setPageOpen(false,slug,location)
			setMobile(true)
		}
		setDrawer(prev => !prev)
	}
	function closeHandler() {
		setClose(prev => !prev)
	}
	const screenWidth = useMediaQuery()
	useEffect(()=>{
		const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add("dark")
		setToggle(true)
		if (screenWidth < 768) {
			setMobile(true)
		}
	},[setMobile, screenWidth])
	

	return (
		<>
			<Header drawer={drawer} drawerHandler={drawerHandler} shadow={shadow}/>
			<div className={`flex w-full relative
				md:grid ${!close ? 'sm:grid-cols-[240px_auto]' : 'md:grid-cols-[16px_auto]'} 
				w-full h-full transition-all duration-500 ease-in-out `}>
				<div className="w-full h-full col-span-1 hidden md:block">
					<Sidebar close={close} closeHandler={closeHandler}/>
				</div>
				<div
					ref={main}
					className="flex flex-col relative w-full h-screen col-span-1 overflow-y-auto px-8"
					onScroll={scroll}
				>
					<div className="flex flex-col  w-full min-h-16 md:min-h-0" />
					<Outlet/>
				</div>
			</div>
		</>
	)
}
