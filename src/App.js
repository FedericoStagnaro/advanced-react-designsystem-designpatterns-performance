import { includeUser } from "./components/include-user";
import { logProps } from "./components/log-props";
import { UserInfoForm } from "./components/user-form";
import { UserInfo } from "./components/user-info"

const UserInfoWrapper = logProps(UserInfo)
const UserInfoWithLoader = includeUser(UserInfo, 3)

function App() {
  return (
    <div>
      {/* <UserInfoWrapper test={"test"} b="SomeText" /> */}
      <UserInfoForm />
    </div>
  );
}

export default App;
