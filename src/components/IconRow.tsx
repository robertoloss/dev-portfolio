import Icon from "./Icon"


type Props = {
  includedIcons: any[]
  isHovered: boolean
}
export default function IconRow({ includedIcons, isHovered }: Props) {

  return (
    <div className={`flex py-2 flex-row gap-x-1 md:gap-x-2 group z-0 
      animate-scroll         
      ${isHovered ? 'paused' : "" } w-fit`}
    >
      {includedIcons.map((icon, index) => 
        <Icon icon={icon} index={index} /> 
      )}
    </div>
  )
}
