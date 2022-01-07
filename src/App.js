import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "./Components/Layouts/Navbar";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
};

export default App;
