import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Dashboard, Accounts } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Dashboard />} />
          <Route path="/accounts" exact component={() => <Accounts />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;