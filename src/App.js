import { RedButton, SmallRedButton } from "./components/partial";
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
      <RedButton text="Red button partial" />
      <SmallRedButton text="Red and Small button partial"/>
    </>
  );
}

export default App;
