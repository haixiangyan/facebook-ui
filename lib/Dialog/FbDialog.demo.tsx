import * as React from 'react'
import FbExample from './FbDialog.example'
import Demo from '../../Demo'

export default () => {
  return (
    <Demo code={require('!!raw-loader!./FbDialog.example.tsx').default}>
      <FbExample/>
    </Demo>
  )
}
