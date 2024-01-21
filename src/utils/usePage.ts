import { create } from 'zustand'

export type CurrentPageState = {
	pageOpen: boolean
	mobile: boolean
	setPageOpen: (b:boolean, goTo?: string, currentLoc?: string)=>void 
	setMobile: (b: boolean) => void
}

export const usePage = create<CurrentPageState>()((set) => ({
	pageOpen: true,
	mobile: false,
	setPageOpen: (b:boolean, goTo?:string, currentLoc?:string) => {
		if ((goTo === undefined && currentLoc === undefined) || goTo !== currentLoc) {
			set(()=>({ pageOpen: b }))
		}
	},
	setMobile: (b: boolean) => {
		set(()=>({ mobile: b }))
	} 
}))
