import SanitySVG from "../SanitySVG"

type Props = {
	urlArray: string[],
	stackUrl: string | undefined,
}


export default function Stack({ urlArray, stackUrl } : Props) {

	return (
		<div className="flex flex-row items-center">
			<img src={stackUrl} className="h-6 w-6"/>
			<div className="flex flex-row">
				{urlArray && urlArray.map((url: string, index : number) => 
					{if (index != 4) { 
						return (
						<img 
								src={url}
								className={`h-8 w-8 p-1  ${index === 2 ? 'dark:bg-gray-800 rounded-full' : '' }`} 
								key={index}
							/>
						)
					} else return (
							<div className="h-8 w-8 p-1" key={index}>
								<SanitySVG />
							</div>
						)
					}
				)}
			</div>
		</div>
	)
}
