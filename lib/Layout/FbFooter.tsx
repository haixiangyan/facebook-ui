import * as React from 'react'
import {createScopedClass} from '../utils/classes'

import './FbLayout.scss'

const sc = createScopedClass('fb-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const FbFooter: React.FunctionComponent<Props> = (props) => {
  const {className, ...restProps} = props
  return (
    <div className={sc('footer', { extra: className })} {...restProps}>
      {props.children}
    </div>
  )
}

export default FbFooter
