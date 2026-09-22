import { SplitScreen } from './components/split-screen';


const ContentComponent = ({ title, backgroundColor }) => {
  return <h2 style={{ backgroundColor }}>{title}</h2>
}

function App() {
  return (
    <SplitScreen leftWidth={2} rightWidth={1}>
      <ContentComponent title={"Left"} backgroundColor={"red"}/>
      <ContentComponent title={"Right"} backgroundColor={"blue"}/>
    </SplitScreen>
  );
}

export default App;
