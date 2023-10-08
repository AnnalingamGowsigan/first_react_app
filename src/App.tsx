import { useState } from "react";
import Message from "./Message";

const App = () => {
  const [drink, setDrink] = useState(["tea", "plain-tea"]);

  const handleClick = () => {
    //Add
    // setDrink([...drink, "coffee"]);

    // //Remove
    // setDrink(drink.filter((drinkName) => drinkName !== "tea "));

    //Update
    setDrink(
      drink.map((drinkName) => (drinkName === "tea" ? "coffeeTea" : drinkName))
    );
  };

  return (
    <div>
      <h1>{drink}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
