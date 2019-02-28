import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/header'
import App from './pages/home'
import Demo from './pages/demo'

// function componnet
const RouterConfig = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/demo" component={Demo} />
            </Switch>
        </div>
    </Router>
)

export default RouterConfig
