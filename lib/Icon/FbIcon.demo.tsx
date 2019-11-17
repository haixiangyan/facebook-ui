import * as React from 'react'
import FbExample from './FbIcon.example'
import Demo from '../../Demo'

export default () => {
  return (
    <Demo code={require('!!raw-loader!./FbIcon.example.tsx').default}>
      <FbExample/>
    </Demo>
  )
}
