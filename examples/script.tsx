import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FbIconExample from '../lib/Icon/FbIcon.example'
import FbDialogExample from '../lib/Dialog/FbDialog.example'
import FbLayoutExample from '../lib/Layout/Layout.example'

ReactDOM.render(
    <div>
        <h1>Icon</h1>
        <FbIconExample/>
        <h1>Dialog</h1>
        <FbDialogExample/>
        <h1>Layout</h1>
        <FbLayoutExample/>
    </div>,
  document.getElementById('root')
)
