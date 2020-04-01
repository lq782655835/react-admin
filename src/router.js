import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/header'
import App from './pages/home'
// import Demo from './pages/demo'
import Demo from './pages/demo/dispatch_demo'
import Hook from './pages/hook'

// function componnet
const RouterConfig = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/demo" component={Demo} />
                <Route path="/hook" component={Hook} />
                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
)

export default RouterConfig
