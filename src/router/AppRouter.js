import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Presentation } from "../components/view/Presentation";
import { Beach } from "../components/view/Beach";
import { City } from "../components/view/City";
import { Mountain } from "../components/view/Mountain";
import {Footer} from '../components/view/Footer';
import {Navbar2} from "../components/ui/Navbar2";

export const AppRouter = () =>{
  return (
    <Router>
      <div>
        <Navbar2/>

        <Switch>
          <Route exact path="/">
            <Presentation />
          </Route>
          <Route path="/Mountain">
            <Mountain />
          </Route>
          <Route path="/Beach">
            <Beach />
          </Route>
          <Route path="/City">
            <City />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}



