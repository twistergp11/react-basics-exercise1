import React from "react";
import withCoordinates from "./WithCoordinates";
import CoordinatesTemplate from "./CoordinatesTemplate";

const FindTheCoordinateswithHOC = ({ x, y }) => {
  return (
    <div>
      <CoordinatesTemplate x={x} y={y} />
    </div>
  );
};

export default withCoordinates(FindTheCoordinateswithHOC);
