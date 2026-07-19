import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
//import { useLoaderData } from "react-router-dom";
//import { urlFor } from "@/sanity/client";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage } from "@/utils/usePage";
import useMediaQuery from "@/utils/useMediaQuery";
import { useTheme } from "@/utils/useTheme";
import Particles from "@/components/Particles";
import DotField from "@/components/DotField";
import LiquidEther from "@/components/LiquidEther";

export default function Root() {
	const [close, setClose] = useState(false)
	const [drawer, setDrawer] = useState(false)
	const [shadow, setShadow] = useState(false)	
	const main = useRef<HTMLDivElement | null>(null)
	const { setPageOpen, setMobile } = usePage();
	const switchTheme = useTheme((state)=>state.switchTheme)

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
		console.log(slug)
		setDrawer(prev => !prev)
	}
	function closeHandler() {
		setClose(prev => !prev)
	}
	const screenWidth = useMediaQuery()
	useEffect(()=>{
		//const root = window.document.documentElement
    //root.classList.remove("light", "dark")
    //root.classList.add("dark")
		switchTheme("dark")
		if (screenWidth < 768) {
			setMobile(true)
		}
	},[screenWidth])
	

	return (
		<>
			<Header drawer={drawer} drawerHandler={drawerHandler} shadow={shadow}/>
			<div className={`flex p-0 
				md:grid ${!close ? 'sm:grid-cols-[240px_auto]' : 'md:grid-cols-[16px_auto]'} 
				w-full h-full transition-all duration-500 ease-in-out `
      }>
				<div className="w-full min-w-4 h-full col-span-1 hidden md:block">
					<Sidebar close={close} closeHandler={closeHandler}/>
				</div>
				<div
					ref={main}
					className="flex flex-col relative w-full h-screen col-span-1 overflow-y-auto px-8 overflow-x-hidden"
					onScroll={scroll}
				>
          <div
            className="pointer-events-none sticky top-0 z-0 h-screen w-[150%] shrink-0 -ml-10"
          >
         <LiquidEther
            colors={[ '#ffffff', '#ffffff', '#ffffff' ]}
            mouseForce={15}
            cursorSize={50}
            isViscous
            viscous={30}
            iterationsViscous={5}
            iterationsPoisson={1}
            resolution={0.5}
            isBounce
            autoDemo
            autoSpeed={0.9}
            autoIntensity={0.8}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
        />
          </div>
          <div className="relative z-10 -mt-[100vh]">
            <div className="flex flex-col  w-full min-h-16 md:min-h-0" />
            <Outlet/>
          </div>
				</div>
			</div>
		</>
	)
}
