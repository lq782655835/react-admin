import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import App from './pages/home'
import Demo from './pages/demo'

// function componnet
const RouterConfig = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/demo" component={Demo} />
        </Switch>
    </HashRouter>
)

export default RouterConfig
