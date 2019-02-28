import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import RouteConfig from './router'

store.subscribe(() => {
    console.log(store.getState(), 'store changed')
})

let render = Components => {
    let App = () => (
        <Provider store={store}>
            <Components />
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
render(RouteConfig)

serviceWorker.unregister()
