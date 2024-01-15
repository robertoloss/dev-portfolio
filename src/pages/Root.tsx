import { Outlet } from "react-router-dom";
//import { useLoaderData } from "react-router-dom";
//import { urlFor } from "@/sanity/client";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";

export default function Root() {
	const [toggle, setToggle] = useState(false)

	useEffect(()=>{
		const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add("dark")
		setToggle(true)
	},[])

	if (toggle) null

	return (
		<div className={`grid grid-cols-[240px_auto] w-full  h-full`}>
			<div className="w-full h-full col-span-1 border-r-muted
				border-r-[1px]">
				<Sidebar/>
			</div>
			<div  className="flex flex-col relative w-full bg--600
				h-screen col-span-1 overflow-y-auto px-8">
				<Outlet/>
			</div>
		</div>
	)
}
