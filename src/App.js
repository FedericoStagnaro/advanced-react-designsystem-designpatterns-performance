// import { CurrentUserLoader } from "./components/current-user-loader";
import axios from "axios";
import { UserInfo } from "./components/user-info";
import { DataSourceRender } from "./components/data-source-render";

const getDataFromServer = async (url) => {
  const response = await axios.get(url)
  return response.data;
}

function App() {
  return (
    <>
      <DataSourceRender
        getData={async () => getDataFromServer("/users/3")}
        render={(resource) => <UserInfo user={resource} />}
      />
    </>
  );
}

export default App;
