export { default as Icon } from './Icon/Icon'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from './Icon/Icon'
import './index.scss'

const fn: React.MouseEventHandler = (e: React.MouseEvent) => {
  console.log(e.target)
  console.log((e.target as SVGElement).classList)
}

ReactDOM.render(
  <div>
    <Icon className={'test-icon'} name="trashcan"/>
    <Icon style={{width: '2em', height: '2em'}} name="skin"/>
    <Icon name="sport" onMouseEnter={() => console.log(1)} onMouseDown={() => console.log(2)} onClick={fn}/>
    <Icon spin={true} name="shakehands" solid={true}/>
  </div>,
  document.getElementById('root')
)
