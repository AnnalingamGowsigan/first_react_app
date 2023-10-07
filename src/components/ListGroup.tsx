import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "Ameriaca", "London", "Tokyo", "Paris"];
  // Hook (stateHook):- using this we say that our component have state that change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // here we are using {} to render variable dynamically
  return (
    <Fragment>
      <h1>List</h1>

      {items.length === 0 && <p>No items find</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
