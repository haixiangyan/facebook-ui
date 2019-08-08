import * as React from 'react'
import FbDialog from './FbDialog'
import {useState} from 'react'

export default function () {
  const [x, setX] = useState(false)
  return (
    <div>
      <button onClick={() => setX(!x)}>Click</button>
      <FbDialog visible={x}>
        <strong>hi</strong>
      </FbDialog>
    </div>
  )
}