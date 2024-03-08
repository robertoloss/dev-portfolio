import { Switch } from "./ui/switch"
import { useTheme } from "@/utils/useTheme"


export default function ThemeToggle() {
	const switchTheme = useTheme((state)=>state.switchTheme)
	const toggle = useTheme((state)=>state.toggle)

	function changeHandler() {
		switch (toggle) {
			case true: switchTheme("light");
				break
			case false: switchTheme("dark");
				break
		}
	}

	return (
		<Switch
			checked={toggle}
			onCheckedChange={changeHandler}
		/>
	)
}
