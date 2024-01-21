import { useParams, Params } from "react-router-dom"
import AnimationWrapper from "@/components/AnimationWrapper"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { usePage } from "@/utils/usePage"


export default function Project() {
	const params : Params = useParams()
	console.log(params)
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

	return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<h1>Project: {params.p}</h1>
			</AnimationWrapper>
		</div>
	)
}
