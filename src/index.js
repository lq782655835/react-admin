import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'

import './index.css'

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
render(Router)

serviceWorker.unregister()
