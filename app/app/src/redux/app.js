import React from "react";
import './App.css'

//components
import Employees from './view/pages/Employees/Employees';
import Calc from './view/pages/Calc/Calc';

export default function App() {
  return (
    <Router>
      <div>
   

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/:id">
            <Calc />
          </Route>
          <Route path="/">
            <Employees />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
