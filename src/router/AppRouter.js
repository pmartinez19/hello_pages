import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {Beach} from '../components/view/Beach';
import {City} from '../components/view/City';
import {Me} from '../components/view/Me';
import {Mountain} from '../components/view/Mountain';



export const AppRouter = () => {
    return (
        <div>

            <Router>
                <Switch>
                    <Route path="/" component = {Me}/>
                    <Route path="/beach" component = {Beach}/>
                    <Route path="/mountain" component = {Mountain}/>
                    <Route path="/city" component = {City}/>
                </Switch>
            </Router>
        </div>
    )
}
