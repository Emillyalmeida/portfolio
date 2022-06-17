import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contato"></Route>
      <Route path="/portifolio"></Route>
      <Route path="/sobre-mim"></Route>
    </Switch>
  );
};

export default Routers;
