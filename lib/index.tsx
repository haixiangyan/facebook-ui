export { default as Icon } from './Icon/Icon'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from './Icon/Icon'

const fn: React.MouseEventHandler = (e: React.MouseEvent) => {
  console.log(e.target)
  console.log((e.target as SVGElement).classList)
}

ReactDOM.render(
  <div>
    <Icon className={'video'} name="trashcan"/>
    <Icon name="skin"/>
    <Icon name="sport" onMouseEnter={() => console.log(1)} onMouseDown={() => console.log(2)} onClick={fn}/>
  </div>,
  document.getElementById('root')
)
