import { useEffect, useState } from "react";

const useCoordinates = () => {
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

  return { x, y };
};

export default useCoordinates;
