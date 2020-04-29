import React from "react";
import CoordinatesTemplate from "./CoordinatesTemplate";

const FindTheCoordinatesWithHooks = ({ x, y }) => {
  return (
    <div>
      <CoordinatesTemplate x={x} y={y} />
    </div>
  );
};

export default FindTheCoordinatesWithHooks;
