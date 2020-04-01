import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.scss'

class Button extends Component {
    static defaultProps = {
        class: 'button-private'
    }

    static propTypes = {
        class: PropTypes.string,
        onClick: PropTypes.func
    }

    handleClick = (e) => {
        const { onClick } = this.props
        onClick && onClick(e)
    }

    render() {
        return <div className={'button ' + this.props.class} onClick={this.handleClick}>{this.props.children}</div>
    }
}
// const Button = props => <div className="button">{props.children}</div>

export default Button
