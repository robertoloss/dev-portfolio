import { Outlet } from "react-router-dom";
//import { useLoaderData } from "react-router-dom";
//import { urlFor } from "@/sanity/client";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

export default function Root() {
	const [toggle, setToggle] = useState(false)
	const [close, setClose] = useState(false)
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

	return (
		<div className={`
			grid ${!close ? 'grid-cols-[240px_auto]' : 'grid-cols-[16px_auto]'}
			w-full h-full transition-all duration-500 ease-in-out`}
		>
			<div className="w-full h-full col-span-1">
				<Sidebar close={close} closeHandler={closeHandler}/>
			</div>
			<div  className="flex flex-col relative w-full bg--600
				h-screen col-span-1 overflow-y-auto px-8">
				<Outlet/>
			</div>
		</div>
	)
}
