import { useState } from "react";

import "./App.css";
import DynamicComponents from "./components/DynamicComponents";

function App() {
  return (
    <>
      <h1>Dynamic Component</h1>
      {/* Fetch all Dynamic components */}
      <DynamicComponents />
    </>
  );
}

export default App;
