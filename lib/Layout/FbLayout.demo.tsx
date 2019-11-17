import * as React from 'react'
import FbExample from './FbLayout.example'
import Demo from '../../Demo'

export default () => {
  return (
    <Demo code={require('!!raw-loader!./FbLayout.example.tsx').default}>
      <FbExample/>
    </Demo>
  )
}
