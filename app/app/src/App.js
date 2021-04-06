import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//PAGES
import Home from './componenets/home/home'
import Image from './componenets/image/image'
import User from './componenets/user/user'


//CSS
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="listMenu d-flex justify-content-center border">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/image">Image</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/image">
            <Image />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




