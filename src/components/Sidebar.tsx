import { Link } from "react-router-dom"
import ThemeToggle from "@/components/ThemeToggle"


export default function Sidebar() {

	const sidebarButtons = [
		{
			link: '/',
			label: 'Home',
		},
		{
			link: '/about',
			label: 'About',
		},
		{
			link: '/contact',
			label: 'Contact',
		},
		{
			link: '/project/test',
			label: 'Projects',
		},
		{
			link: '/palette',
			label: 'Palette',
		},
	]

	return (
		<div className="flex flex-col w-full h-full ">
			<ThemeToggle />
			{sidebarButtons.map((button,index) => 
				<Link key={index} to={button.link}>
					{button.label}
				</Link>
			)}
		</div>
	)
}
