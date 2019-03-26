import * as React from 'react'
import classes from '../utils/classes'
import './icons.js'
import './Icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  return (
    <svg className={classes('fb-icon', className)} {...restProps}>
      <use xlinkHref={`#icon-icon_${name}`}/>
    </svg>
  )
}

export default Icon
