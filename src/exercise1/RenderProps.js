import React, { useState, useEffect } from "react";

const MouseMove = (props) => {
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

  return <div>{props.render(x, y)}</div>;
};

export default MouseMove;
