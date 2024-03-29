import React, { useState } from "react";
import ChildComponents from "./ChildComponents";

function DynamicComponents() {
  const [comp, setComp] = useState([]);

  const addComponent = (comp_type) => {
    setComp((prev) => [...prev, { id: Math.random, comp_type }]);
  };

  return (
    <>
      <button onClick={() => addComponent("text")}>Add Text</button>

      {comp.map((item) => (
        <ChildComponents key={item.id} type={item.comp_type} />
      ))}
    </>
  );
}

export default DynamicComponents;
