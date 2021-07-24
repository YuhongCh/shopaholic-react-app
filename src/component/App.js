import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Detail from "./Detail";
import Home from "./Home";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from "./Header";


function App() {

  return (
        <Switch>
          <Route path="/signin" exact>
            <SignIn/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/product" exact>
            <Home/>
          </Route>
          <Route path="/product/detail" exact>
            <Detail />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
  );
}

export default App;