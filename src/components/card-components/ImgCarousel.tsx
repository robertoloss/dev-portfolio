import { urlFor } from "@/sanity/client";
import { CarouselPrevious, CarouselNext, Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Project } from "@/sanity-types";
import ModalForPicture from "../ModalForPicture";

type Props = {
	project: Project
}

export default function ImgCarousel({ project } : Props) {
	//console.log(urlFor(project.carousel[0].image)?.width(1200).url())
	const carousel = project?.carousel ? project.carousel as [] : []
	
	return (
		<div className="flex flex-col max-h-[320px] justify-center relative ml-6 w-full">
			<Carousel opts={{
				align: "start",
				loop: true,
			}}>
				<CarouselPrevious className=""/>
					<div className={`${carousel.length > 0 ? 'bg-none' : 'bg-gray-300 animate-pulse'}`}>
					<CarouselContent className="">
						{carousel[carousel.length - 1] && carousel
							.sort((a: any, b:any) => a.name - b.name)
							.map((pic: any, index: number)=>
							<CarouselItem 
								className="flex flex-col p-2 relative  justify-center items-center cursor-pointer" key={index}
							>
								<ModalForPicture carousel={carousel} pic={pic}>
									<div className="w-full h-full max-w-[400px] max-h-[240px] z-20 transition">
										<img 
											className="h-full w-full object-cover"
											src={urlFor(pic?.image)?.width(1200).url()} 
											key={index}
										/>
									</div>
								</ModalForPicture>
							</CarouselItem>	
						)}
					</CarouselContent>
					</div>
				<CarouselNext className=""/>
			</Carousel>
		</div>
	)
}
