import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ColorBox extends Component {
    state = { color: 'red' }
    getColor() {
        return this.state.color
    }

    render() {
        return (
            <div>
                this is test - {this.getColor()} - {this.props.name}
            </div>
        )
    }
}

ColorBox.propTypes = {
    name: PropTypes.string.isRequired
}

ColorBox.defaultProps = {
    name: 'defaultname'
}

export default ColorBox
