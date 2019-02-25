import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import './index.css';
import RouteConfig from './router'

let render = (Components) => {
    ReactDOM.render(<Components />, document.getElementById('root'));
}
render(RouteConfig)

serviceWorker.unregister();
