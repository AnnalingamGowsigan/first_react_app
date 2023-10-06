import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "Ameriaca", "London", "Tokyo", "Paris"];
  //   items = [];

  //   here we are using {} to render variable dynamically
  return (
    <Fragment>
      <h1>List</h1>

      {items.length === 0 && <p>No items find</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
