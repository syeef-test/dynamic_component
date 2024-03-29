import React, { useState } from "react";
import ChildComponents from "./ChildComponents";

function DynamicComponents() {
  const [comp, setComp] = useState([]);

  const addComponent = (comp_type) => {
    setComp((prev) => [...prev, { id: Math.random, type }]);
  };

  return (
    <>
      <button onClick={() => addComponent("text")}>Add Text</button>
      <ChildComponents />
    </>
  );
}

export default DynamicComponents;
