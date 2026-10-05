// import { CurrentUserLoader } from "./components/current-user-loader";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card test={"VALUE "}>
        <Card.Header>
          <h1 style={{ margin: 0 }}>Header</h1>
        </Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipiscing elit leo metus dui in luctus taciti fames at, curae litora volutpat lacinia varius arcu accumsan praesent inceptos a interdum vel quisque. Viverra tincidunt litora hendrerit netus orci inceptos curabitur duis volutpat, porta himenaeos enim pharetra per montes tristique magna fringilla, magnis cum semper donec mollis fames maecenas diam. Tincidunt quam ante dignissim neque litora vestibulum pharetra, augue ad ligula magnis congue habitasse mattis vel, et nisl duis urna volutpat nullam.
        </Card.Body>
        <Card.Footer>
          <span>Footer</span>
          <button>Ok</button>
          <button>Cancel</button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default App;
