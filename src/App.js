// import { CurrentUserLoader } from "./components/current-user-loader";
import axios from "axios";
import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";

const getDataFromServer = async (url) => {
  const response = await axios.get(url)
  return response.data;
}

function App() {
  return (
    <>
      <DataSource
        getData={async () => getDataFromServer("/users/3")}
        resourceName={"user"}
      >
        <UserInfo></UserInfo>
      </DataSource>
    </>
  );
}

export default App;
