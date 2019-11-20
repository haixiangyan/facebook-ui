import * as React from 'react'
import FbExample from './FbButton.example'
import Demo from '../../Demo'

export default () => {
  return (
    <Demo code={require('!!raw-loader!./FbButton.example.tsx').default}>
      <FbExample/>
    </Demo>
  )
}
