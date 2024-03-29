import React, { useState } from "react";
import ChildComponents from "./ChildComponents";

function DynamicComponents() {
  // State to manage all dynamic component
  const [comp, setComp] = useState([]);

  //Add component dynamically with unique key
  const addComponent = (comp_type) => {
    const id = Math.random().toString() + comp_type + Date.now();
    setComp((prev) => [...prev, { id: id, comp_type }]);
  };

  return (
    <>
      <button onClick={() => addComponent("text")}>Add Text</button>
      <button onClick={() => addComponent("textarea")}>Add Text Area</button>
      <button onClick={() => addComponent("checkbox")}>Add Check Box</button>
      <button onClick={() => addComponent("select")}>Add Select</button>
      <button onClick={() => addComponent("number")}>Add Number</button>
      {/* Render components */}
      {comp.map((item) => (
        <ChildComponents key={item.id} type={item.comp_type} />
      ))}
    </>
  );
}

export default DynamicComponents;
