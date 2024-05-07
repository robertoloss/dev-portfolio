import { Link, useLocation } from "react-router-dom"
import { sidebarButtons } from "@/utils/sidebar-menu";
import ThemeToggle from "@/components/ThemeToggle"
import { usePage } from "@/utils/usePage";
import { cn } from "@/lib/utils";
 
type Props = {
	close: boolean,
	closeHandler: ()=>void
}

export default function Sidebar({ close, closeHandler } : Props) {
	const location = useLocation().pathname.split('/').slice(-1)[0]
	const { setPageOpen, setMobile } = usePage()

	return (
		<div className={`flex flex-row w-full h-full`}>
			{<div className={cn(`flex flex-col w-full h-full overflow-hidden`,{
					'border-r-[1px]': !close,
				})}>
				<div className={cn(`flex flex-col w-full h-full pt-12 pl-10`,{
					'pl-10': !close
				})}>
					<div className="flex flex-col gap-y-8">
						<ThemeToggle />
						<div className="flex flex-col gap-y-2">
							{sidebarButtons.map((button,index) => 
								<Link
									onClick={()=>{
										setPageOpen(false,button.link,location)
										setMobile(false)
									}}
									key={index} 
									to={button.link} 
									className="text-lg hover:ml-2 hover:underline 
										transition-all duration-100 ease-linear"
								>
									{button.label}
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>}
			<div className={cn(`flex flex-col w-4 h-full justify-center hover:bg-muted cursor-pointer group`,{
					'p-2' : close
				})}
				onClick={closeHandler}
			>
				<div className="flex flex-col w-full cursor-pointer items-center justify-center" >
						<div className={cn(`
							bg-muted w-1 h-3 rounded-full group-hover:bg-muted-foreground transition -mb-[2px] duration-200
							group-hover:rotate-12
						`,
						{
							'group-hover:rotate-12': !close,
							'group-hover:-rotate-12': close,
						}
						)}
						/>	
						<div className={cn(`
							bg-muted w-1 h-3 rounded-full group-hover:bg-muted-foreground transition -mt-[2px] duration-200
							group-hover:-rotate-12
						`,
						{
							'group-hover:rotate-12': close,
							'group-hover:-rotate-12': !close,
						}
						)}
						/>
				</div>
			</div>
		</div>
	)
}
