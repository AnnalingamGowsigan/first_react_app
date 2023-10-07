import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Ameriaca", "London", "Tokyo", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cites" />
    </div>
  );
}

export default App;
