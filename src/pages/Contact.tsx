import { useEffect } from "react"
import { usePage } from "@/utils/usePage"
import AnimationWrapper from "@/components/AnimationWrapper"
import { useLocation } from "react-router-dom"


export default function Contact() {
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

  return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<h1>
					Contact
				</h1>
			</AnimationWrapper>
		</div>
	)
}
