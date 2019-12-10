import React, {Component} from "react";
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import { LoginWrap } from "../controller/login";
export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={LoginWrap} />
                </Switch>
            </Router>
        );
    }
}
