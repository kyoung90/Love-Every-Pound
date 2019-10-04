import React from "react";
import "./App.css";
import WeightDisplay from "./features/user/WeightDisplay";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container>
        <WeightDisplay />
      </Container>
    </div>
  );
}

export default App;
