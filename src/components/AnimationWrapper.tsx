import { motion, AnimatePresence } from "framer-motion";

type Props = {
	children: React.ReactNode
	pageOpen?: boolean
	mobile?: boolean
}

export default function AnimationWrapper({ children, pageOpen, mobile } : Props) {

	return (
		<AnimatePresence>
			{pageOpen && 
			<motion.div
				key={location.pathname}
				initial={{ 
					opacity: 0, 
					//x: 50 
				}}
				animate={{ 
					opacity: 1, 
					//x: 0, 
					transition: {ease: 'easeOut', duration: .5} }}
				exit={{ 
					opacity: 0, 
					transition: {ease: 'easeOut', duration: mobile ? 0 : .2}, 
					//x: -50
				}}
			>
				{children}
			</motion.div>}
		</AnimatePresence>
	)
}
