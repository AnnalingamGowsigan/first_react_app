import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Ameriaca", "London", "Tokyo", "Paris"];
  let selectedIndex = 0;
  //   items = [];

  // Event handler
  const HandleClick = (event: MouseEvent) => {
    console.log(event);
  };

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
            onClick={HandleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
