import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Presentation } from "../components/view/Presentation";
import { Beach } from "../components/view/Beach";
import { City } from "../components/view/City";
import { Mountain } from "../components/view/Mountain";
import {Footer} from '../components/view/Footer';
import {Navbar2} from "../components/ui/Navbar2";
import { Journey } from "../components/view/Journey";

import {FAQS} from "../components/view/FAQS";


export const AppRouter = () =>{
  
  return (
      <div>
    <Router>
        <Navbar2/>
        <Switch>
          <Route exact path="/hello_pages" >
            <Presentation />
          </Route>
          <Route path="/hello_pages/Journey">
            <Journey />
          </Route>
          
          <Route path="/hello_pages/Beach">
            <Beach />
          </Route>
          <Route path="/hello_pages/Mountain">
            <Mountain />
          </Route>
          <Route path="/hello_pages/City">
            <City />
          </Route>
          <Route path="/hello_pages/FAQS">
            <FAQS />
          </Route>
          <Redirect to = "/hello_pages"/>
        </Switch>
    </Router>
        <Footer />
      </div>
  );
}



