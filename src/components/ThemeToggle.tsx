import { Switch } from "./ui/switch"
import { useState } from "react"
import { useTheme } from "@/utils/useTheme"


export default function ThemeToggle() {
	const [checked, setChecked] = useState(true)
	const switchTheme = useTheme((state)=>state.switchTheme)

	function changeHandler() {
		switch (checked) {
			case true: switchTheme("light");
				break
			case false: switchTheme("dark");
				break
		}
		setChecked(prev=>!prev)
	}

	return (
		<Switch
			checked={checked}
			onCheckedChange={changeHandler}
		/>	
	)
}
