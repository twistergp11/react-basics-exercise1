import React, { useState, useEffect } from "react";

const withCoordinates = (OriginalComponent) => {
  const NewComponent = () => {
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    const handleListener = (e) => {
      setX(e.x);
      setY(e.y);
    };

    useEffect(() => {
      window.addEventListener("mousemove", handleListener);

      return () => window.removeEventListener("mousemove", handleListener);
    }, []);

    return <OriginalComponent x={x} y={y} />;
  };
  return NewComponent;
};

export default withCoordinates;
