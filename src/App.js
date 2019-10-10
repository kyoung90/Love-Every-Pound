import React from "react";
import "./App.css";
import WeightDisplay from "./features/user/WeightDisplay";
import QuoteDisplay from "./features/quotes/QuoteDisplay";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./features/nav/Navbar";
import Home from "./features/home/Home";
import About from "./features/home/About";
import Profile from "./features/user/Profile";
import SettingsForm from "./features/user/form/SettingsForm";
import Login from "./features/user/form/Login";
import Signup from "./features/user/form/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="main-container" textAlign="center">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/quote" render={() => <QuoteDisplay />} />
          <Route exact path="/weights" render={() => <WeightDisplay />} />
          <Route
            exact
            path="/user/:id"
            render={props => <Profile routeProps={props} />}
          />
          <Route
            exact
            path="/user/:id/edit"
            render={props => <SettingsForm routeProps={props} />}
          />
          {/* <Route exact path="/weights/new" render={() => <h1>Weight Form</h1>} /> */}
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" render={() => <Signup />} />
          <Route render={() => <h1>Error!</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
