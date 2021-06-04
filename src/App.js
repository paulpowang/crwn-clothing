import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from "react-router-dom";

const HatPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
