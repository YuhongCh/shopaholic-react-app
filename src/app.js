import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import useToken from "./hook/useToken";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const { token, setToken } = useToken();

  if (token) {
    return (
      <div>
        Home Page
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin">
            <SignIn setToken={setToken}/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;