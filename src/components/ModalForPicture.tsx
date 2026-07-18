import {
  Dialog,
  DialogContent,
  DialogTrigger,
	DialogHeader
} from "@/components/ui/dialog"
import { urlFor } from "@/sanity/client"
import { CarouselPrevious, CarouselNext, Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useState } from "react";

type Props = {
	children: React.ReactNode
	carousel: any[]
	pic: any
}
export default function ModalForPicture({ children, carousel, pic } : Props) {
  const [open, setOpen] = useState(false)

	const indexOfPic = carousel.indexOf(pic)
	let i = 0;
	while (i < indexOfPic) {
		const picToMove = carousel.shift()
		carousel.push(picToMove)
		i++
	}

	return (
		<Dialog
      open={open}
      onOpenChange={()=>setOpen(prev=>!prev)}
    >
			<DialogTrigger>
				{ children }
			</DialogTrigger>
			<DialogContent 
        onClick={()=>setOpen(false)}
				className="
					flex flex-col flex-1 py-12 px-4 sm:p-12 w-full sm:max-w-[1200px] h-full max-h-[80%] 
					bg-transparent shadow-none border-none justify-center items-center rounded-xl overflow-hidden"
      >
				<Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
        >
					<CarouselPrevious 
            className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center"
          />
						<div className={`${carousel.length > 0 ? 'bg-none' : 'bg-gray-300 animate-pulse'}`}>
						<CarouselContent className="flex flex-row w-fit">
							{carousel[carousel.length - 1] && carousel.map((pic: any, index: number)=>
								<CarouselItem 
									className="flex flex-col px-6 relative justify-center items-center cursor-pointer" 
									key={index}
								>
									<div className="flex flex-col items-center w-full  sm:max-w-[100%] max-h-[320px] sm:max-h-[600px] z-20">
										<img 
                      onClick={(e)=>e.stopPropagation()}
											className="h-full w-fit object-contain"
											src={urlFor(pic?.image)?.width(1200).url()} 
											key={index}
										/>
									</div>
								</CarouselItem>	
							)}
						</CarouselContent>
						</div>
					<CarouselNext 
            className="mx-4 hidden sm:flex sm:flex-col sm:items-center sm:justify-center"
          />
				</Carousel>
			</DialogContent>
		</Dialog>
	)
}
