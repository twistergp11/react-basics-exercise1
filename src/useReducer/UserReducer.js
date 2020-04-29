import React, { useReducer } from "react";

const initVal = { name: "Hello", surname: "World" };

const reducer = (state, action) => {
  switch (action.type) {
    case "input":
      console.log(state);
      return { ...state, [action.key]: action.value };
    case "reset":
      return initVal;
    default:
      return state;
  }
};
const UserReducer = () => {
  const [initState, dispatch] = useReducer(reducer, initVal);

  const handleChange = (e) =>
    dispatch({ type: "input", key: e.target.name, value: e.target.value });

  const handleReset = () => dispatch({ type: "reset" });

  return (
    <div>
      <input
        type="text"
        name="name"
        value={initState.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="surname"
        value={initState.surname}
        onChange={handleChange}
      />

      <h3>
        {initState.name}-{initState.surname}
      </h3>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default UserReducer;
