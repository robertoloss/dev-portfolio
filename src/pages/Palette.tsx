import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AnimationWrapper from "@/components/AnimationWrapper"
import { usePage } from "@/utils/usePage"

export default function Palette() {
	const { pageOpen, setPageOpen, mobile } = usePage()
	const location = useLocation()
	
	useEffect(()=>{
		setPageOpen(true)
	},[setPageOpen,location])

	return (
		<div className="min-h-screen">
			<AnimationWrapper pageOpen={pageOpen} mobile={mobile}>
				<div className="flex flex-col">
					<br/>
					--background <div className="w-20 h-4 mb-2 bg-background"/>
					--foreground <div className="w-20 h-4 mb-2 bg-foreground"/>
					--card <div className="w-20 h-4 mb-2 bg-card"/>
					--card-foreground <div className="w-20 h-4 mb-2 bg-card-foreground"/>
					--popover <div className="w-20 h-4 mb-2 bg-popover"/>
					--popover-foreground <div className="w-20 h-4 mb-2 bg-popover-foreground"/>
					--primary <div className="w-20 h-4 mb-2 bg-primary"/>
					--primary-foreground <div className="w-20 h-4 mb-2 bg-primary-foreground"/>
					--secondary <div className="w-20 h-4 mb-2 bg-secondary"/>
					--secondary-foreground <div className="w-20 h-4 mb-2 bg-secondary-foreground"/>
					--muted <div className="w-20 h-4 mb-2 bg-muted"/>
					--muted-foreground <div className="w-20 h-4 mb-2 bg-muted-foreground"/>
					--accent <div className="w-20 h-4 mb-2 bg-accent"/>
					--accent-foreground <div className="w-20 h-4 mb-2 bg-accent-foreground"/>
					--destructive <div className="w-20 h-4 mb-2 bg-destructive"/>
					--destructive-foreground <div className="w-20 h-4 mb-2 bg-destructive-foreground"/>
					--border <div className="w-20 h-4 mb-2 bg-border"/>
					--input <div className="w-20 h-4 mb-2 bg-input"/>
					--ring <div className="w-20 h-4 mb-2 bg-ring"/>
					--radius <div className="w-20 h-4 mb-[180px] bg-radius"/>
				</div>
			</AnimationWrapper>
		</div>
	)
}
