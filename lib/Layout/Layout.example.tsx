import * as React from 'react'
import Layout from './Layout'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function() {
  return (
    <div>
      <h1>Example 1</h1>
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  )
}
