import React, { useState } from "react";

const initObj = { name: "Hello", surname: "World" };

const Users = () => {
  const [data, setData] = useState(initObj);

  const resetBtn = () => {
    setData(initObj);
  };

  const eventHandler = (e) => {
     setData({...data, [e.target.name]:e.target.value})
  }

  return (
    <div>
      <input type="text" name="name" value={data.name} onChange={(e) => eventHandler(e)} />

      <input
        type="text"
        name="surname"
        value={data.surname}
        onChange={(e) => eventHandler(e)}
      />

      <h3>
        {data.name}-{data.surname}
      </h3>

      <button type="button" onClick={resetBtn}>
        Reset
      </button>
    </div>
  );
};

export default Users;
