import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Route,
   Switch
} from "react-router-dom";

const App = () => {
  return (
    
    <Router>
      <div className="route">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route exact path="/Cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
