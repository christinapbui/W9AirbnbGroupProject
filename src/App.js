import React from "react";
import ExperiencesList from "./components/ExperiencesList";
import AddExperience from "./components/AddExperience";
import ViewExpInfo from "./components/ViewExpInfo";
import EditExpInfo from "./components/EditExpInfo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'rheostat/initialize';
import 'rheostat/css/rheostat.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <div className="add">
            <AddExperience />
          </div>
        </Route>

        <Route path="/experience/:eid/edit">
          <EditExpInfo />
        </Route>

        <Route path="/experience/:eid">
          <ViewExpInfo />
        </Route>
        
        <Route path="/" exact>
          <div className="experience">
            <ExperiencesList />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
