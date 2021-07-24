import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Detail from "./Detail";
import ProductList from "./Home";
import useToken from "../hook/useToken";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const { token, setToken } = useToken();

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin" exact>
            <SignIn setToken={setToken}/>
          </Route>
          <Route path="/signup" exat>
            <SignUp/>
          </Route>
          <Route path="/detail" exat>
            <Detail />
          </Route>
          <Route path="/list" exact>
            <ProductList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;