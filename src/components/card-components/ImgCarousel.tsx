import { urlFor } from "@/sanity/client";
import { CarouselPrevious, CarouselNext, Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Project } from "@/sanity/sanity-types";

type Props = {
	project: Project
}

export default function ImgCarousel({ project } : Props) {
	//console.log(urlFor(project.carousel[0].image)?.width(1200).url())

	return (
		<div className="flex flex-col max-h-[320px] justify-center relative ml-6 w-full">
			<Carousel opts={{
				align: "start",
				loop: true,
			}}>
				<CarouselPrevious className=""/>
				<CarouselContent >
					{project.carousel && project.carousel.map((pic,index)=>
						<CarouselItem className="flex flex-col justify-center items-center" key={index}>
							<div className="w-full h-full max-w-[400px] max-h-[240px]">
								<img 
									className="h-full w-full object-cover rounded-lg"
									src={urlFor(pic?.image)?.width(1200).url()} 
									key={index}
								/>
							</div>
						</CarouselItem>	
					)}
				</CarouselContent>
				<CarouselNext className=""/>
			</Carousel>
		</div>
	)
}
