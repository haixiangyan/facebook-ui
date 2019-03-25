import * as React from 'react'
import '../../icons/icon_roundclose_fill.svg'

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#icon_${props.name}`}/>
      </svg>
    </span>
  )
}

export default Icon
