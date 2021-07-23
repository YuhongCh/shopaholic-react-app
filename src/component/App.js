import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProductDetail from "./ProductDetail";
import useToken from "../hook/useToken";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const { token, setToken } = useToken();

  if (token) {
    return <ProductDetail/>;
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
          <Route path="/detail">
            <ProductDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;