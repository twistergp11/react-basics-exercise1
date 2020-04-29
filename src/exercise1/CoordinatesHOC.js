import React from "react";
import withCoordinates from "./WithCoordinates";
import CoordinatesTemplate from "./CoordinatesTemplate";

const FindTheCoordinatesWithHooks = ({ x, y }) => {
  return (
    <div>
      <CoordinatesTemplate x={x} y={y} />
    </div>
  );
};

export default withCoordinates(FindTheCoordinatesWithHooks);
