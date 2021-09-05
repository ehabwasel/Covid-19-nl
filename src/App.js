import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Results from "./components/Results";

import Select from "./components/Select";

function App() {
  return (
    <Router >
      <h1 className='title'>Covid-19 Netherlands </h1>
      <Select />
      <Switch>
        <Route path="/:state" children={<Results />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
