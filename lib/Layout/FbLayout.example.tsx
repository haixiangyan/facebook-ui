import * as React from 'react'
import FbLayout from './FbLayout'
import FbHeader from './FbHeader'
import FbContent from './FbContent'
import FbFooter from './FbFooter'

export default function() {
  return (
    <div>
      <h1>Example 1</h1>
      <div>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader>Header</FbHeader>
          <FbContent>Content</FbContent>
          <FbFooter>Footer</FbFooter>
        </FbLayout>
      </div>
    </div>
  )
}
