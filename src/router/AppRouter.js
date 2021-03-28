import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Me } from "../components/view/Me";
import { Beach } from "../components/view/Beach";
import { City } from "../components/view/City";
import { Mountain } from "../components/view/Mountain";
import {Navbar} from '../components/ui/Navbar';
import {Footer} from '../components/view/Footer';

export const AppRouter = () =>{
  return (
    <Router>
      <div>
        <Navbar/>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Me />
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



