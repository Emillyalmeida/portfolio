import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contato"></Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/sobre-mim"></Route>
    </Switch>
  );
};

export default Routers;
