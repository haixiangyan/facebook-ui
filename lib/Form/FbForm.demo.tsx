import * as React from 'react'
import FbExample from './FbForm.example'
import Demo from '../../Demo'

export default () => {
  return (
    <Demo code={require('!!raw-loader!./FbForm.example.tsx').default}>
      <FbExample/>
    </Demo>
  )
}
