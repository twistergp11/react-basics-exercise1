import React from "react";
import Coordinates from "./exercise1/RenderProps";
import CoordinatesHOC from "./exercise1/CoordinatesHOC";
import CoordinatesWithHooks from "./exercise1/CoordinatesWithCustomHooks";
import CoordinatesTemplate from "./exercise1/CoordinatesTemplate";

function App() {
  return (
    <div className="App">
      <Coordinates render={CoordinatesTemplate} />
      <CoordinatesHOC />
      <CoordinatesWithHooks />
    </div>
  );
}

export default App;
