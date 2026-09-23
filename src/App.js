// import { CurrentUserLoader } from "./components/current-user-loader";
import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceRender } from "./components/data-source-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url)
  return response.data;
}

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key)
}

function App() {
  return (
    <>
      <DataSourceRender
        getData={async () => getDataFromServer("/users/3")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataSourceRender
        getData={async () => getDataFromLocalStorage("test")}
        render={(msg) => <p>{msg}</p>}
      />
    </>
  );
}

export default App;
