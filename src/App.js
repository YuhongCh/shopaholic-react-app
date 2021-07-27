import Signin from "./gateway/signin";
import Signup from "./gateway/signup";
import Checkout from "./checkout";
import Detail from "./detail";
import Home from "./home";
import {Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import Cart from "./cart";
import {Redirect} from "react-router";

function App() {

  const RedirectHome = () => {
    return (<Redirect to="/"/>)
  }

  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/' component={RedirectHome}/>
      <Route path='/signin' exact component={Signin}/>
      <Route path='/signup' exact component={Signup}/>
      <Route path='/product' exact component={Home}/>
      <Route path='/product/detail/' exact component={Detail}/>
      <Route path='/cart' exact component={Cart}/>
      <Route path='/checkout' exact component={Checkout}/>
    </BrowserRouter>
  )
}

export default App;