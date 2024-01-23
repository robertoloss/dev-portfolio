import { urlFor } from "@/sanity/client";
import { CarouselPrevious, CarouselNext, Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Project } from "@/sanity/sanity-types";

type Props = {
	project: Project
}

export default function ImgCarousel({ project } : Props) {

	return (
		<div className="flex flex-col max-h-[320px] justify-center relative ml-10 border border-muted ">
			<Carousel opts={{
				align: "start",
				loop: true,
			}}>
				<CarouselPrevious />
				<CarouselContent >
					{project.carousel && project.carousel.map((pic,index)=>
						<CarouselItem className="flex flex-col justify-center items-center" key={index}>
							<img className="h-full max-h-[240px] object-contain" src={urlFor(pic.image)?.width(1200).url()} key={index}/>
						</CarouselItem>	
					)}
				</CarouselContent>
				<CarouselNext className=""/>
			</Carousel>
		</div>
	)
}
