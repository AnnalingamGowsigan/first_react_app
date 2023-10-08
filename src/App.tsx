import { useState } from "react";
import Message from "./Message";

const App = () => {
  const [drink, setDrink] = useState({
    name: "tea",
    price: 5,
  });

  const handleClick = () => {
    const newObj = {
      ...drink,
      price: 6,
    };
    setDrink(newObj);
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
