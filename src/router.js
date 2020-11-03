import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Product from "./components/product";
import ProductItems from "./components/ProductItems";

function RouteConfig() {
  return (
    <div className="mrgnBtm">
      <h1>Shoe Shop</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route
            exact
            path="/product"
            component={Product}
          />
          <Route path="/product/:id" component={ProductItems} />
          <Route path="*" component={() => <h2>404 Not Found</h2>} />
        </Switch>
      </Router>
    </div>
  );
 }
export default RouteConfig;
