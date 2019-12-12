import React from 'react';
import './App.scss';
import './base.scss'

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
/* import Abc from './components/Abc' */
import loadable from './utils/loadable'


/* const routes = [
 *   { title: 'home',
 *     to: '/',
 *     component: Abc
 *   }
 * ] */

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */ './views/Others/404'))
const View500 = loadable(() => import(/* webpackChunkName: '500' */ './views/Others/500'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/index' />} />
      <Route path='/500' component={View500} />
      <Route path='/login' component={Login} />
      <Route path='/404' component={View404} />
      {/* <Route component={DefaultLayout} /> */}
    </Switch>
  </Router>
)


/* function App() {
 *   return (
 *     <Router>
 *       <div className="App">
 *         <header className="App-header">
 *           <ul className="app-nav">
 *             {
 *               routes.map(item =>
 *                 <li key={ item.title }>
 *                   <Link to={ item.to }>{ item.title }</Link>
 *                 </li>)
 *             }
 *           </ul>
 *         </header>
 *         <div className="app-content">
 *           {
 *             routes.map(item =>
 *               <Route path={ item.to }
 *                      exact
 *                      component={ item.component }
 *                      key={ item.title }
 *               />)
 *           }
 *         </div>
 *       </div>
 *     </Router>
 *   );
 * } */

export default App;
