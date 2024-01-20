import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
//import { useLoaderData } from "react-router-dom";
//import { urlFor } from "@/sanity/client";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

export default function Root() {
	const [toggle, setToggle] = useState(false)
	const [close, setClose] = useState(false)
	const [drawer, setDrawer] = useState(false)
	function drawerHandler() {
		setDrawer(prev => !prev)
	}
	function closeHandler() {
		setClose(prev => !prev)
	}

	useEffect(()=>{
		const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add("dark")
		setToggle(true)
	},[])

	if (toggle) null

	//change grid-cols-[240px_auto] for palett page

	return (
		<>
			<Header drawer={drawer} drawerHandler={drawerHandler}/>
			<div className={`flex w-full
				md:grid ${!close ? 'sm:grid-cols-[240px_auto]' : 'md:grid-cols-[16px_auto]'} 
				w-full h-full transition-all duration-500 ease-in-out`}>
				<div className="w-full h-full col-span-1 hidden md:block">
					<Sidebar close={close} closeHandler={closeHandler}/>
				</div>
				<div className="flex flex-col relative w-full 
					h-screen col-span-1 overflow-y-auto px-8"
				>
					<Outlet/>
				</div>
			</div>
		</>
	)
}
