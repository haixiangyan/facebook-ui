import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FbIcon } from '../lib/index'
import FbDialog from '../lib/Dialog/FbDialog.example'

ReactDOM.render(
    <div>
        <FbIcon name="video"/>
        <FbIcon name="sports"/>
        <FbDialog/>
    </div>,
  document.getElementById('root')
)
