import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FbIcon from '../lib/Icon/FbIcon'

const fn: React.MouseEventHandler = (e: React.MouseEvent) => {
  console.log(e.target)
  console.log((e.target as SVGElement).classList)
}

ReactDOM.render(
  <div>
    <h1>Hello</h1>
    <FbIcon className={'test-icon'} name="trashcan"/>
    <FbIcon style={{width: '2em', height: '2em'}} name="skin"/>
    <FbIcon name="sport" onMouseEnter={() => console.log(1)} onMouseDown={() => console.log(2)} onClick={fn}/>
    <FbIcon spin={true} name="shakehands" solid={true}/>
  </div>,
  document.getElementById('root')
)
