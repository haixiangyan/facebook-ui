import * as React from 'react'
import './icons/index'
import './Icon.scss'

interface IconProps {
  name: string
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg onClick={props.onClick} className="fb-icon">
      <use xlinkHref={`#icon_${props.name}`}/>
    </svg>
  )
}

export default Icon
