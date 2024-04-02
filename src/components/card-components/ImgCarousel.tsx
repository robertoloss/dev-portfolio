import { urlFor } from "@/sanity/client";
import { CarouselPrevious, CarouselNext, Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Project } from "@/sanity/sanity-types";

type Props = {
	project: Project
}

export default function ImgCarousel({ project } : Props) {
	//console.log(urlFor(project.carousel[0].image)?.width(1200).url())
	const carousel = project.carousel as []
	console.log(carousel[0].image.asset)
	
	return (
		<div className="flex flex-col max-h-[320px] justify-center relative ml-6 w-full">
			<Carousel opts={{
				align: "start",
				loop: true,
			}}>
				<CarouselPrevious className=""/>
					<div className={`${carousel.length > 0 ? 'bg-none' : 'bg-gray-300 animate-pulse'}`}>
					<CarouselContent className="">
						{carousel[carousel.length - 1] && project.carousel.map((pic , index: number)=>
							<CarouselItem className="flex flex-col relative justify-center items-center" key={index}>
								<div className="w-full h-full max-w-[400px] max-h-[240px] z-20">
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
				<CarouselNext className=""/>
			</Carousel>
		</div>
	)
}
