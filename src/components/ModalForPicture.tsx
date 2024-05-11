import {
  Dialog,
  DialogContent,
  DialogTrigger,
	DialogHeader
} from "@/components/ui/dialog"
import { urlFor } from "@/sanity/client"
import { CarouselPrevious, CarouselNext, Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type Props = {
	children: React.ReactNode
	carousel: any[]
	pic: any
}
export default function ModalForPicture({ children, carousel, pic } : Props) {
	const indexOfPic = carousel.indexOf(pic)
	const carouselBefore = carousel.filter((_,i) => i < indexOfPic )
	const carouselAfter = carousel.filter((_,i) => i >= indexOfPic )
	const sortedCarousel = carouselAfter.concat(carouselBefore)

	return (
		<Dialog>
			<DialogTrigger>
				{ children }
			</DialogTrigger>
			<DialogContent 
				className="
					flex flex-col flex-1 py-12 px-4 sm:p-12 w-full sm:max-w-[60%] h-fit 
					bg-background border border-muted-foreground"
				>
				<DialogHeader>
				</DialogHeader>
				<Carousel opts={{
					align: "start",
					loop: true,
				}}>
					<CarouselPrevious className="mx-4 hidden sm:flex sm:flex-col sm:items-center sm:justify-center"/>
						<div className={`${carousel.length > 0 ? 'bg-none' : 'bg-gray-300 animate-pulse'}`}>
						<CarouselContent className="">
							{carousel[carousel.length - 1] && sortedCarousel.map((pic: any, index: number)=>
								<CarouselItem 
									className="flex flex-col px-6 relative justify-center items-center cursor-pointer" 
									key={index}
								>
									<div className=" w-full  sm:max-w-[75%] max-h-[320px] sm:max-h-[400px] z-20">
										<img 
											className="h-full w-full object-cover"
											src={urlFor(pic?.image)?.width(1200).url()} 
											key={index}
										/>
									</div>
								</CarouselItem>	
							)}
						</CarouselContent>
						</div>
					<CarouselNext className="mx-4 hidden sm:flex sm:flex-col sm:items-center sm:justify-center"/>
				</Carousel>
			</DialogContent>
		</Dialog>
	)
}
