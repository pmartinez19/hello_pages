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
import { Journey } from "../components/view/Journey";
import Galery from "../components/view/Galery";
import {FAQS} from "../components/view/FAQS";
import { Contact } from "../components/view/Contact";

export const AppRouter = () =>{
  return (
      <div>
    <Router>
        <Navbar2/>
        <Switch>
          <Route exact path="/" >
            <Presentation />
          </Route>
          <Route path="/Journey">
            <Journey />
          </Route>
          <Route path="/Galery">
            <Galery />
          </Route>
          <Route path="/Beach">
            <Beach />
          </Route>
          <Route path="/Mountain">
            <Mountain />
          </Route>
          <Route path="/City">
            <City />
          </Route>
          <Route path="/FAQS">
            <FAQS />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
        <Footer />
      </div>
  );
}



