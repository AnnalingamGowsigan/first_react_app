import { useState } from "react";
import Like from "./components/Like";
function App() {
  return (
    <div>
      <Like
        onClick={() => {
          console.log("clicked");
        }}
      ></Like>
    </div>
  );
}

export default App;
