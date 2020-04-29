import React from "react";
import CoordinatesRenderProps from "./exercise1/CoordinatesRenderProps";
import Coordinates from "./exercise1/RenderProps";
import CoordinatesHOC from "./exercise1/CoordinatesHOC";
import CoordinatesWithHooks from "./exercise1/CoordinatesCustomHook";

function App() {
  return (
    <div className="App">
      <Coordinates render={(x, y) => <CoordinatesRenderProps x={x} y={y} />} />

      <CoordinatesHOC />
      <CoordinatesWithHooks />
    </div>
  );
}

export default App;
