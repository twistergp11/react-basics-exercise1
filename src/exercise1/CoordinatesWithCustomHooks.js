import React from "react";
import useCoordinates from "./useCoordinates";
import CoordinatesTemplate from "./CoordinatesTemplate";

const CoordinatesWithCustomHooks = () => {
  const { x, y } = useCoordinates();

  return (
    <div>
      <CoordinatesTemplate x={x} y={y} />
    </div>
  );
};

export default CoordinatesWithCustomHooks;
