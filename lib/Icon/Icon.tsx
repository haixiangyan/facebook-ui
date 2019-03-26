import * as React from 'react'
import './icons/index'
import './Icon.scss'

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="fb-icon">
      <use xlinkHref={`#icon_${props.name}`}/>
    </svg>
  )
}

export default Icon
