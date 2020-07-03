import React from "react";
import ExperiencesList from "./components/ExperiencesList";
import AddExperience from "./components/AddExperience";
import ViewExpInfo from "./components/ViewExpInfo";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddExperience />
        </Route>
        <Route path="/" exact>
          <ExperiencesList />
        </Route>
        <Route path="/experience/:eid">
          <ViewExpInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
