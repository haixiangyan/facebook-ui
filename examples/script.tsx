import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.png'
import FbIconExample from '../lib/Icon/FbIcon.example'
import FbDialogExample from '../lib/Dialog/FbDialog.example'
import FbLayoutExample from '../lib/Layout/FbLayout.example'
import {FbLayout, FbSider, FbContent, FbHeader, FbFooter} from '../lib/Layout/FbLayout'

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
              <li><Link to="/icon">Icon</Link></li>
              <li><Link to="/dialog">Dialog</Link></li>
              <li><Link to="/layout">Layout</Link></li>
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
              <Route path="/icon">
                <div>
                  <h1>Icon</h1>
                  <FbIconExample/>
                </div>
              </Route>
              <Route path="/dialog">
                <div>
                  <h1>Dialog</h1>
                  <FbDialogExample/>
                </div>
              </Route>
              <Route path="/layout">
                <div>
                  <h1>Layout</h1>
                  <FbLayoutExample/>
                </div>
              </Route>
            </Switch>
          </FbContent>
        </FbLayout>
        <FbFooter className="doc-footer">Made by Haixiang Yan</FbFooter>
      </FbLayout>
    </Router>,
  document.getElementById('root')
)
