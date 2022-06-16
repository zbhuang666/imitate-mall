import React, {Component} from "react";
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import { LoginWrap } from "../controller/login";
import { MathPixWrap } from "../controller/mathPix";
export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={LoginWrap} />
                    <Route path="/mathPix" component={MathPixWrap} />
                </Switch>
            </Router>
        );
    }
}
