// import { CurrentUserLoader } from "./components/current-user-loader";
import { BookInfo } from "./components/book-info";
import { ResourceLoader } from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { UserLoader } from "./components/user-loader";


function App() {
  return (
    <>
      <ResourceLoader
        resourceUrl={"/users/3"}
        resourceName={"user"}

      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl={"/books/3"}
        resourceName={"book"}

      >
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
