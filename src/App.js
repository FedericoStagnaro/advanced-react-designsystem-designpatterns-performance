import { LargeAuthorListItem } from './components/authors/LargeListItems';
import { SmallAuthorListItem } from './components/authors/SmallListItems';
import { LargeBookListItem } from './components/books/LargeListItems';
import { SmallBookListItem } from './components/books/SmallListItems';
import { RegularList } from './components/lists/Regular';
import { SplitScreen } from './components/split-screen';
import { authors } from "./data/authors";
import { books } from "./data/books";


const ContentComponent = ({ children, title, backgroundColor }) => {
  return (
    <>
      <div style={{ backgroundColor }}>
        <h2>{title}</h2>
        {children}
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <SplitScreen leftWidth={2} rightWidth={1}>
        <ContentComponent title={"Left"} backgroundColor={"red"} >
          <RegularList
            items={authors}
            sourceName={"author"}
            ItemComponent={LargeAuthorListItem}
          />
          <RegularList
            items={books}
            sourceName={"book"}
            ItemComponent={LargeBookListItem}
          />
        </ContentComponent>
        <ContentComponent title={"Right"} backgroundColor={"blue"}>
          <RegularList
            items={authors}
            sourceName={"author"}
            ItemComponent={SmallAuthorListItem}
          />

          <RegularList
            items={books}
            sourceName={"book"}
            ItemComponent={SmallBookListItem}
          />
        </ContentComponent>
      </SplitScreen>


    </>
  );
}

export default App;
