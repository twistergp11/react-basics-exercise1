import React from "react";
import CoordinatesTemplate from "./CoordinatesTemplate";

const FindTheCoordinatesWithRenderProps = ({ x, y }) => {
  return (
    <div>
      <CoordinatesTemplate x={x} y={y} />
    </div>
  );
};

export default FindTheCoordinatesWithRenderProps;
