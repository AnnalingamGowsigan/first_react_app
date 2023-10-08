import { useState } from "react";
import Message from "./Message";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, status: "fixed" },
    { id: 2, status: "error" },
  ]);

  const handleClick = () => {
    //Update
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, status: "error" } : bug))
    );
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
