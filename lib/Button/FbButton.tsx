import * as React from 'react'
import {ButtonHTMLAttributes} from 'react'
import {classes} from '../utils/classes'

import './FbButton.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'solid' | 'danger' | 'info'
}

const FbButton: React.FunctionComponent<Props> = (props) => {
  const {className, children, type, ...restProps} = props
  return (
    <button
      className={classes('fb-button', `fb-button-${type}`, className)}
      {...restProps}
    >
      {children}
    </button>
  )
}

FbButton.defaultProps = {
  type: 'info'
}

export default FbButton
