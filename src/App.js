import { GreenSmallButton, RedButton } from "./components/composition";
import { RecursiveComponent } from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2"
    }

  },
  key3: "{}",

}

function App() {
  return (
    <>
      <RedButton text="I am Red" />
      <GreenSmallButton text="I am small green"/>
    </>
  );
}

export default App;
