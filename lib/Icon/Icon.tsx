import * as React from 'react'
import classes from '../utils/classes'
import './icons.js'
import './Icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  solid?: boolean
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, solid, ...restProps}) => {
    const link = `#icon-icon_${name}` + (solid ? '_fill' : '')
    console.log(link)
    return (
      <svg className={classes('fb-icon', className)} {...restProps}>
        <use xlinkHref={link}/>
      </svg>
    )
}

export default Icon
