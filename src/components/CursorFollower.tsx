import useMediaQuery from '@/utils/useMediaQuery'
import { useState, useEffect } from 'react'

 export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const isMobile = useMediaQuery() < 768

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    const updatePositions = () => {
      setDotPosition(prevDot => ({
        x: prevDot.x + (mousePosition.x - prevDot.x) * 0.2,
        y: prevDot.y + (mousePosition.y - prevDot.y) * 0.2
      }))

      setCirclePosition(prevCircle => ({
        x: prevCircle.x + (dotPosition.x - prevCircle.x) * 0.1,
        y: prevCircle.y + (dotPosition.y - prevCircle.y) * 0.1
      }))
    }

    const animationFrame = requestAnimationFrame(updatePositions)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [mousePosition, dotPosition])

  const dotSize = 6
  const circleSize = 32

  return (
    <>
      {!isMobile && 
        <div className="pointer-events-none fixed inset-0 z-50">
          <div
            className="absolute rounded-full bg-foreground"
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              left: `${dotPosition.x}px`,
              top: `${dotPosition.y}px`,
              transform: `translate(-50%, -50%)`,
            }}
          />
          <div
            className="absolute rounded-full bg-foreground opacity-15"
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              left: `${circlePosition.x}px`,
              top: `${circlePosition.y}px`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        </div>
      }
    </>
  )
}


