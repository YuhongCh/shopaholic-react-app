import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Detail from "./Detail";
import Home from "./Home";
import useToken from "../hook/useToken";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./Header";

function App() {

  const { token, setToken } = useToken();

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SignInOrHome token={token} setToken={setToken} />
          </Route>
          <Route path="/product" exact>
            <div>
              <Header />
              <Home />
            </div>
          </Route>
          <Route path="/signin" exact>
            <SignIn setToken={setToken}/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/product/detail" exact>
            <Header />
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

function SignInOrHome({token, setToken}) {
  if (token === null) {
    return (
      <SignIn setToken={setToken}/>
    )
  }
  else {
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    )
  }
}

export default App;