import { Switch, Route } from "react-router-dom";
import AboutMe from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";
import Project from "../pages/projeto";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contato">
        <Contact />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/sobre-mim">
        <AboutMe />
      </Route>
      <Route path="/projetos/:id">
        <Project />
      </Route>
    </Switch>
  );
};

export default Routers;
