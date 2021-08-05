import Signin from "./gateway/signin";
import Signup from "./gateway/signup";
import Checkout from "./checkout";
import Detail from "./detail";
import Home from "./home";
import {Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import Cart from "./cart";
import {Redirect,Switch} from "react-router";

function App() {

  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/signin' component={Signin}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/product' component={Home}/>
      <Route exact path='/product/:id' component={Detail}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/checkout' component={Checkout}/>
      <Route component={RedirectHome} />
      </Switch>
    </BrowserRouter>
  )
}

const RedirectHome = () => {
  return (<Redirect to="/home"/>)
}

export default App;