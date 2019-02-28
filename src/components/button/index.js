import React, { Component } from 'react'
import './index.scss'

// class Button extends Component {
//     render() {
//         return <div className="button">{this.props.children}</div>
//     }
// }
const Button = props => <div className="button">{props.children}</div>

// Button.props

export default Button
