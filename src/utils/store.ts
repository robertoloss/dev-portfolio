import { create } from 'zustand'

export type UseThemeType = {
	toggle: boolean
	switchTheme: (s: "dark" | "light")=>void 
}

export const useTheme = create<UseThemeType>()((set) => ({
	toggle: false,
	switchTheme: (s: "dark" | "light") => {
		const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(s)
		set((state)=>({toggle: !state.toggle}))
	}
}))
