import * as React from 'react'
import {ReactElement} from 'react'
import {createScopedClass} from '../utils/classes'
import FbSider from './FbSider'
import './FbLayout.scss'

const sc = createScopedClass('fb-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[]
}

const FbLayout: React.FunctionComponent<Props> = (props) => {
  const {className, ...restProps} = props
  const children = (props.children as ReactElement[])
  const hasSider = 'length' in children &&
    children.some(node => node.type === FbSider)

  return (
    <div className={sc({'': true, hasSider}, {extra: className})} {...restProps}>
      {props.children}
    </div>
  )
}

export default FbLayout
