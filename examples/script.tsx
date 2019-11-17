import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.scss'
import {HashRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import logo from './logo.png'
import FbIconDemo from '../lib/Icon/FbIcon.demo'
import FbDialogExample from '../lib/Dialog/FbDialog.example'
import FbLayoutExample from '../lib/Layout/FbLayout.example'
import {FbContent, FbFooter, FbHeader, FbLayout, FbSider} from '../lib/Layout/FbLayout'

ReactDOM.render(
    <Router>
      <FbLayout className="example">
        <FbHeader className="header">
          <div className="logo">
            <img width="48" height="48" src={logo} alt="Logo"/>
          </div>
        </FbHeader>
        <FbLayout>
          <FbSider className="doc-sider">
            <h2>Component</h2>
            <ul>
              <li><NavLink to="/icon">Icon</NavLink></li>
              <li><NavLink to="/dialog">Dialog</NavLink></li>
              <li><NavLink to="/layout">Layout</NavLink></li>
            </ul>
          </FbSider>
          <FbContent className="doc-content">
            <Switch>
              <Route path="/" exact={true}>
                <div>
                  <h2>Welcome to Facebook UI</h2>
                  <p>This is a simple UI library built with React.js</p>
                </div>
              </Route>
              <Route path="/icon" component={FbIconDemo}/>
              <Route path="/dialog" component={FbDialogExample}/>
              <Route path="/layout" component={FbLayoutExample}/>
            </Switch>
          </FbContent>
        </FbLayout>
        <FbFooter className="doc-footer">Made by Haixiang Yan</FbFooter>
      </FbLayout>
    </Router>,
  document.getElementById('root')
)
