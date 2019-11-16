import * as React from 'react'
import FbLayout from './FbLayout'
import FbHeader from './FbHeader'
import FbContent from './FbContent'
import FbFooter from './FbFooter'
import FbSider from './FbSider'

import './FbLayout.example.scss'

export default function() {
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader className="header">My Header</FbHeader>
          <FbContent className="content" style={{margin: '8px 0'}}>My Content</FbContent>
          <FbFooter className="footer">My Footer</FbFooter>
        </FbLayout>
      </div>
      <div>
        <h1>Example 2</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader className="header">My Header</FbHeader>
          <FbLayout>
            <FbSider className="sider" style={{margin: '8px 0'}}>Sider</FbSider>
            <FbContent className="content" style={{margin: '8px 0 8px 8px'}}>Content</FbContent>
          </FbLayout>
          <FbFooter className="footer">My Footer</FbFooter>
        </FbLayout>
      </div>
      <div>
        <h1>Example 3</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbHeader className="header">My Header</FbHeader>
          <FbLayout>
            <FbContent className="content" style={{margin: '8px 0'}}>Content</FbContent>
            <FbSider className="sider" style={{margin: '8px 0 8px 8px'}}>Sider</FbSider>
          </FbLayout>
          <FbFooter className="footer">My Footer</FbFooter>
        </FbLayout>
      </div>
      <div>
        <h1>Example 4</h1>
        <FbLayout className="my-layout" style={{height: 500}}>
          <FbSider className="sider" style={{margin: '0 8px 0 0'}}>Sider</FbSider>
          <FbLayout>
            <FbHeader className="header">My Header</FbHeader>
            <FbContent className="content" style={{margin: '8px 0'}}>Content</FbContent>
            <FbFooter className="footer">My Footer</FbFooter>
          </FbLayout>
        </FbLayout>
      </div>
    </div>
  )
}
