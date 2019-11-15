import * as React from 'react'
import {createScopedClass} from '../utils/classes'

import './FbLayout.scss'

const sc = createScopedClass('fb-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const FbSider: React.FunctionComponent<Props> = (props) => {
  const {className, ...restProps} = props
  return (
    <div className={sc('sider', { extra: className })} {...restProps}>
      {props.children}
    </div>
  )
}

export default FbSider
