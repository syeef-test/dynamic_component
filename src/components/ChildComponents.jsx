import React from "react";

function ChildComponents({ type }) {
  const displayData = () => {
    switch (type) {
      case "text":
        return <input type="text" />;
      default:
        return null;
    }
  };
  return <div>{displayData()}</div>;
}

export default ChildComponents;
