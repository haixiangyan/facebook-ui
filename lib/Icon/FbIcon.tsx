import * as React from 'react'
import classes from '../utils/classes'
import './icons/index'
import './FbIcon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  solid?: boolean
  spin?: boolean
}

const FbIcon: React.FunctionComponent<IconProps> =
  ({className, name, solid, spin, ...restProps}) => {
    const link = `#icon_${name}` + (solid ? '_fill' : '')
    const classNames = classes('fb-icon', className, spin && 'fb-icon-spin')
    return (
      <svg className={classNames} {...restProps}>
        <use xlinkHref={link}/>
      </svg>
    )
}

export default FbIcon
