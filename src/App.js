import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Abc from './components/Abc'


const routes = [
  { title: 'home',
    to: '/',
    component: Abc
  }
]

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul className="app-nav">
            {
              routes.map(item =>
                <li key={ item.title }>
                  <Link to={ item.to }>{ item.title }</Link>
                </li>)
            }
          </ul>
        </header>

        <div className="app-content">
          {
            routes.map(item =>
              <Route path={ item.to }
                     exact
                     component={ item.component }
                     key={ item.title }
              />)
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
