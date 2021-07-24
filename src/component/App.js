import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Detail from "./Detail";
import ProductList from "./Home";
import useToken from "../hook/useToken";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const { token, setToken } = useToken();

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" exact>
            <SignIn setToken={setToken}/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/detail" exact>
            <Detail />
          </Route>
          <Route path="/list" exact>
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;