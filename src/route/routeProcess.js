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
      <Route exact path="/produk" component={Product} />
      <Route exact path="/dealer" component={Dealers} />
      <Route exact path="/tentang" component={About} />
      <Route exact path="/berita" component={NewsAndEvent} />
      <Route exact path="/blog" component={Blog} />
    </Switch>
  );
}

export default RouteProcess;
