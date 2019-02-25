import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './pages/home';
import Demo from './pages/demo'

export default class RouterConfig extends Component {
    render() {
        return (
            <HashRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/demo' component={Demo}/>
    </Switch>
  </HashRouter>
        )
    }
}