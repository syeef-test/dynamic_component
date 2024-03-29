import React from "react";

//Display componets depending on component type
function ChildComponents({ type }) {
  const displayData = () => {
    switch (type) {
      case "text":
        return <input type="text" />;
      case "textarea":
        return <textarea />;
      case "number":
        return <input type="number" />;
      case "checkbox":
        return <input type="checkbox" />;
      case "select":
        return (
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        );
      default:
        return null;
    }
  };
  return <div>{displayData()}</div>;
}

export default ChildComponents;
