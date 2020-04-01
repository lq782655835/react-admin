import React, { Component } from 'react'
import { string, object } from 'prop-types'

import logo from './logo.svg'
import './index.css'

class App extends Component {
    state = { field: 1 }
    static propTypes = {
        model: object.isRequired,
        title: string
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                        {this.state.field}
                    </p>
                    <a
                        className="App-link"
                        href="/#demo"
                        rel="noopener noreferrer">
                        go demo
                    </a>
                </header>
            </div>
        )
    }
}

export default App
