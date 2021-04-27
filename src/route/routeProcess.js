import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../component/Home";
import Product from "../component/Product";
import Dealers from "../component/Dealers";
import About from "../component/About";
import NewsAndEvent from "../component/NewsAndEvent";
import Blog from "../component/Blog";

function RouteProcess() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/dealers" component={Dealers} />
      <Route exact path="/about" component={About} />
      <Route exact path="/news-and-event" component={NewsAndEvent} />
      <Route exact path="/blog" component={Blog} />
    </Switch>
  );
}

export default RouteProcess;
