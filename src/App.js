import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NotFoundPage from "./components/NotFoundPage";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        {/* <Route exact path="/work" component={Work} /> */}

        <Route
          exact
          path="/Contact"
          // component={Contact}
        />

        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
