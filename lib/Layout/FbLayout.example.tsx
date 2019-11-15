import * as React from 'react'
import FbLayout from './FbLayout'
import FbHeader from './FbHeader'
import FbContent from './FbContent'
import FbFooter from './FbFooter'
import FbSider from './FbSider'

export default function() {
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader>My Header</FbHeader>
          <FbContent>My Content</FbContent>
          <FbFooter>My Footer</FbFooter>
        </FbLayout>
      </div>
      <div>
        <h1>Example 2</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader>My Header</FbHeader>
          <FbLayout>
            <FbSider>Sider</FbSider>
            <FbContent>Content</FbContent>
          </FbLayout>
          <FbFooter>My Footer</FbFooter>
        </FbLayout>
      </div>
      <div>
        <h1>Example 3</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader>My Header</FbHeader>
          <FbLayout>
            <FbContent>Content</FbContent>
            <FbSider>Sider</FbSider>
          </FbLayout>
          <FbFooter>My Footer</FbFooter>
        </FbLayout>
      </div>
      <div>
        <h1>Example 4</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbSider>Sider</FbSider>
          <FbLayout>
            <FbHeader>My Header</FbHeader>
            <FbContent>Content</FbContent>
            <FbFooter>My Footer</FbFooter>
          </FbLayout>
        </FbLayout>
      </div>
    </div>
  )
}
